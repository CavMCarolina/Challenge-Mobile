import { View, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useApp } from '../context/AppContext';
import { StorageService } from '../services/storage';
import { Usuario, RootStackParamList } from '../types';
import styles from '../style/style';

type PerfilNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const dadosUsuario: Usuario = {
  nome: 'Username',
  email: 'clt.triste@empresa.com',
  foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zf1l6GpWPrcTWsHvu2lRR0WjSRy7MiLcUA&s',
  cargo: 'Analista de Marketing',
  empresa: 'Tech Solutions Ltda',
  planoSaude: 'Plano Ouro - Vida Saudável',
  numeroCarteirinha: 'PS123456789',
  validadePlano: 'Dezembro/2026',
  habitosConcluidos: 58,
  nivel: 'Intermediário',
  meta: 'Manter rotina de exercícios 4x por semana',
};

export default function PerfilScreen() {
  const navigation = useNavigation<PerfilNavigationProp>();
  const { pontos, habitos } = useApp();

  const sair = async (): Promise<void> => {
    await StorageService.limparSessao();
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Foto e nome */}
      <View style={styles.headerPerfil}>
        <Image source={{ uri: dadosUsuario.foto }} style={styles.fotoPerfil} />
        <Text style={styles.titulo}>{dadosUsuario.nome}</Text>
        <Text style={styles.comentario}>{dadosUsuario.email}</Text>
      </View>

      {/* Informações corporativas */}
      <View style={styles.cardInfo}>
        <Text style={styles.tituloInfo}>Empresa</Text>
        <Text style={styles.texto}>{dadosUsuario.empresa}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.tituloInfo}>Cargo</Text>
        <Text style={styles.texto}>{dadosUsuario.cargo}</Text>
      </View>

      {/* Plano de saúde */}
      <View style={styles.cardInfo}>
        <Text style={styles.tituloInfo}>Plano de Saúde</Text>
        <Text style={styles.texto}>{dadosUsuario.planoSaude}</Text>
        <Text style={styles.texto}>Carteirinha: {dadosUsuario.numeroCarteirinha}</Text>
        <Text style={styles.texto}>Validade: {dadosUsuario.validadePlano}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.tituloInfo}>Seus pontos</Text>
        <Text style={styles.texto}>{pontos}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.tituloInfo}>Hábitos concluídos</Text>
        <Text style={styles.texto}>{dadosUsuario.habitosConcluidos + habitos.length}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.tituloInfo}>Nível atual</Text>
        <Text style={styles.texto}>{dadosUsuario.nivel}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.tituloInfo}>Meta</Text>
        <Text style={styles.texto}>{dadosUsuario.meta}</Text>
      </View>

      {/* Botões de ação */}
      <View style={styles.acoesPerfil}>
        <TouchableOpacity style={styles.botaoPerfil}>
          <Text style={styles.textoBotao}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoPerfil}>
          <Text style={styles.textoBotao}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoPerfil}>
          <Text style={styles.textoBotao}>Suporte ao Cliente</Text>
        </TouchableOpacity>

        {/* Volta para o Login */}
        <Button title="Sair" color="#FF4D4D" onPress={sair} /> 
      </View>
    </ScrollView>
  );
}
