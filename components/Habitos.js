import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker'; 
import { Ionicons } from '@expo/vector-icons';
import styles from '../style/style.js';

export default function HabitTracker() {
  const [habito, setHabito] = useState('');
  const [categoria, setCategoria] = useState('Atividade Física');
  const [habitos, setHabitos] = useState([]);
  const [foto, setFoto] = useState(null);

  // Função para abrir a câmera
  const tirarFoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      setFoto(result.assets[0].uri);
    }
  };

  // Adicionar hábito só se tiver foto e input
  const adicionarHabito = () => {
    if (!habito.trim()) {
      Alert.alert('Campo obrigatório', 'Você precisa digitar o nome do hábito.');
      return;
    }

    if (!foto) {
      Alert.alert('Foto obrigatória', 'Você precisa tirar uma foto para adicionar o hábito.');
      return;
    }

    setHabitos([...habitos, { nome: habito, categoria, foto }]);
    setHabito('');
    setFoto(null); // limpa a foto depois de salvar
  };


  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <Text style={styles.titulo}>Hábitos</Text>
      <Text style={styles.comentario}>Cada hábito vale 30 pontos. Qual hábito gostaria de adicionar?</Text>

      {/* Input do hábito */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu hábito (ex: beber água)"
        value={habito}
        onChangeText={setHabito}
      />

      {/* Picker de categoria */}
      <View style={styles.pickerContainer}>
        <Text style={styles.texto}>Categoria:</Text>
        <Picker
          selectedValue={categoria}
          style={{
            height: 50,
            width: '100%',
            color: '#017BC8',
            fontSize: 16,
          }}
          dropdownIconColor={'#017BC8'}
          onValueChange={(itemValue) => setCategoria(itemValue)}
        >
          <Picker.Item label="Atividade Física" value="Atividade Física" />
          <Picker.Item label="Alimentação" value="Alimentação" />
          <Picker.Item label="Sono" value="Sono" />
          <Picker.Item label="Bem-estar" value="Bem-estar" />
        </Picker>
      </View>

      {/* Tirar foto*/}
      <View style={styles.fotoContainer}>
        <TouchableOpacity style={styles.cameraContainer} onPress={tirarFoto}>
          <Text style={styles.textoBotao}>Tirar Foto</Text>
          <Ionicons name="camera" size={24} color='white' />
        </TouchableOpacity>

        {foto && (
          <Image source={{ uri: foto }} style={styles.foto} />
        )}
      </View>

      {/* Botão adicionar */}
      <TouchableOpacity style={styles.botao} onPress={adicionarHabito}>
        <Text style={styles.textoBotao}>Adicionar Hábito</Text>
      </TouchableOpacity>

      {/* Lista de hábitos */}
      <ScrollView style={{ marginTop: 20 }}>
        {habitos.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardTitulo}>
              <Text style={styles.subtitulo}>{item.nome}</Text>
              <Text style={styles.subtitulo}>30 pontos</Text>
            </View>
            <Text style={styles.texto}>Categoria: {item.categoria}</Text>
            {item.foto && (
              <Image source={{ uri: item.foto }} style={styles.fotoCard} />
            )}
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}
