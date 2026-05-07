import { useState } from 'react';
import { View, Text, TextInput, Alert, Image, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StorageService } from '../services/storage';
import { RootStackParamList } from '../types';
import styles from '../style/style';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [cpf, setCpf] = useState<string>('');
  const [carregando, setCarregando] = useState<boolean>(false);

  const validarLogin = async (): Promise<void> => {
    if (!cpf.trim()) {
      Alert.alert('Campo obrigatório', 'Digite seu CPF ou número da carteirinha.');
      return;
    }
    setCarregando(true);
    try {
      if (cpf === '1234567890') {
        await StorageService.salvarSessao(cpf);
        navigation.replace('App');
      } else {
        Alert.alert('Autenticação', 'As informações fornecidas estão incorretas.');
      }
    } finally {
      setCarregando(false);
    }
  };

  const ligar = (): void => {
    Linking.openURL('tel:08000132992');
  };

  return (
    <View style={styles.loginBG}>
      <Image source={require('../assets/logo.png')} style={styles.logoLogin} />
      <View style={styles.loginContainer}>
        <Text style={styles.comentario}>
          Digite seu <Text style={styles.negrito}>CPF</Text> ou número da{' '}
          <Text style={styles.negrito}>Carteirinha</Text> para acessar o APP!
        </Text>
        <Text style={styles.texto}>CPF ou Carteirinha</Text>
        <TextInput
          value={cpf}
          onChangeText={setCpf}
          style={styles.input}
          keyboardType="numeric"
          editable={!carregando}
        />
        <TouchableOpacity onPress={validarLogin} style={styles.botao} disabled={carregando}>
          {carregando ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.textoBotao}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.contatoLogin}>
        <Text style={styles.texto}>Central de relacionamento</Text>
        <Text style={styles.negrito} onPress={ligar}>0800 013 2992</Text>
      </View>
    </View>
  );
}
