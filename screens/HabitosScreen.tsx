import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { CategoriaHabito, Habito } from '../types';
import { useApp } from '../context/AppContext';
import HabitCard from '../components/HabitCard';
import styles from '../style/style';

export default function HabitosScreen() {
  const [nomeHabito, setNomeHabito] = useState<string>('');
  const [categoria, setCategoria] = useState<CategoriaHabito>(CategoriaHabito.AtividadeFisica);
  const [foto, setFoto] = useState<string | null>(null);
  const [carregando, setCarregando] = useState<boolean>(false);
  const { habitos, adicionarHabito } = useApp();

  // Função para abrir a câmera
  const tirarFoto = async (): Promise<void> => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });
    if (!result.canceled) {
      setFoto(result.assets[0].uri);
    }
  };

  const adicionarNovoHabito = async (): Promise<void> => {
    if (!nomeHabito.trim()) {
      Alert.alert('Campo obrigatório', 'Você precisa digitar o nome do hábito.');
      return;
    }
    if (!foto) {
      Alert.alert('Foto obrigatória', 'Você precisa tirar uma foto para adicionar o hábito.');
      return;
    }
    setCarregando(true);
    try {
      const novoHabito: Habito = {
        id: Date.now().toString(),
        nome: nomeHabito.trim(),
        categoria,
        foto,
        pontos: 30,
      };

      // Adicionar hábito só se tiver foto e input
      await adicionarHabito(novoHabito);
      setNomeHabito('');
      setFoto(null);
      Alert.alert('Sucesso!', 'Hábito adicionado. Você ganhou 30 pontos!');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <Text style={styles.titulo}>Hábitos</Text>
      <Text style={styles.comentario}>Cada hábito vale 30 pontos. Qual hábito gostaria de adicionar?</Text>

      {/* Input do hábito */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu hábito (ex: beber água)"
        value={nomeHabito}
        onChangeText={setNomeHabito}
        editable={!carregando}
      />

      {/* Picker de categoria */}
      <View style={styles.pickerContainer}>
        <Text style={styles.texto}>Categoria:</Text>
        <Picker
          selectedValue={categoria}
          style={{ height: 50, width: '100%', color: '#017BC8', fontSize: 16 }}
          dropdownIconColor="#017BC8"
          onValueChange={(itemValue) => setCategoria(itemValue as CategoriaHabito)}
        >
          <Picker.Item label="Atividade Física" value={CategoriaHabito.AtividadeFisica} />
          <Picker.Item label="Alimentação" value={CategoriaHabito.Alimentacao} />
          <Picker.Item label="Sono" value={CategoriaHabito.Sono} />
          <Picker.Item label="Bem-estar" value={CategoriaHabito.BemEstar} />
        </Picker>
      </View>

      {/* Tirar foto*/}
      <View style={styles.fotoContainer}>
        <TouchableOpacity style={styles.cameraContainer} onPress={tirarFoto} disabled={carregando}>
          <Text style={styles.textoBotao}>Tirar Foto</Text>
          <Ionicons name="camera" size={24} color="white" />
        </TouchableOpacity>
        {foto && (
          <View style={{ position: 'absolute', right: 0 }}>
            <Text style={[styles.texto, { color: '#017BC8' }]}>✓ Foto adicionada</Text>
          </View>
        )}
      </View>

      {/* Botão adicionar */}
      <TouchableOpacity style={styles.botao} onPress={adicionarNovoHabito} disabled={carregando}>
        {carregando ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.textoBotao}>Adicionar Hábito</Text>
        )}
      </TouchableOpacity>

      {/* Lista de hábitos */}
      <FlatList
        data={habitos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HabitCard habito={item} />}
        scrollEnabled={false}
        style={{ marginTop: 20 }}
      />
    </ScrollView>
  );
}
