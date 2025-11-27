import { useState } from 'react';
import { View, Text, TextInput, Alert, Image, TouchableOpacity, Linking  } from 'react-native';
import styles from '../style/style.js';

export default function Login({ navigation }) {
  const [cpf, setCpf] = useState('');

  const validarLogin = () => {
    if (cpf === '1234567890') {
      navigation.replace('App');
    } else {
      Alert.alert('Autenticação', 'As informações fornecidas estão incorretas.');
    }
  };

  const ligar = () => {
    Linking.openURL('tel: 0800 013 2992');
  };

  return (
    <View style={styles.loginBG}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logoLogin}
      />
      <View style={styles.loginContainer}>
       <Text style={styles.comentario}>
          Digite seu <Text style={styles.negrito}>CPF</Text> ou número da <Text style={styles.negrito}>Carteirinha</Text> para acessar o APP!
        </Text>
        <Text style={styles.texto}>CPF ou Carteirinha</Text>
        <TextInput
          value={cpf}
          onChangeText={setCpf}
          style={styles.input}
        />
        <TouchableOpacity onPress={validarLogin} style={styles.botao}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contatoLogin}>
        <Text style={styles.texto}>Central de relacionamento</Text>
        <Text style={styles.negrito} onPress={ligar}>0800 013 2992</Text>
      </View>
    </View>
  );
}
