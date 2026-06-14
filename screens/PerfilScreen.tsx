import { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useApp } from '../context/AppContext';
import { StorageService } from '../services/storage';
import { Usuario, RootStackParamList } from '../types';
import styles, { CORES } from '../style/style';

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
  habitosConcluidos: 260,
  nivel: 'Intermediário',
  meta: 'Manter rotina de exercícios 4x por semana',
};

export default function PerfilScreen() {
  const navigation = useNavigation<PerfilNavigationProp>();
  const { pontos, habitos, resetarPontos } = useApp();
  const [carregando, setCarregando] = useState<boolean>(true);
  const [saindo, setSaindo] = useState<boolean>(false);

  useEffect(() => {
    // Simula carregamento do perfil do usuário
    const timer = setTimeout(() => setCarregando(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const confirmarReset = (): void => {
    Alert.alert('Resetar pontos', 'Seus pontos e hábitos serão zerados. Tem certeza?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Resetar', style: 'destructive', onPress: resetarPontos },
    ]);
  };

  const sair = async (): Promise<void> => {
    setSaindo(true);
    try {
      await StorageService.limparSessao();
      navigation.navigate('Login');
    } finally {
      setSaindo(false);
    }
  };

  if (carregando) {
    return (
      <View style={[styles.container, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={CORES.primaria} />
        <Text style={[styles.texto, { color: CORES.textoCinza, marginTop: 12 }]}>
          Carregando perfil...
        </Text>
      </View>
    );
  }

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

        {/* Resetar os Pontos*/}
        <Button title="Resetar pontos" color="#FF9900" onPress={confirmarReset} />

        {/* Volta para o Login */}
        <TouchableOpacity
          style={[styles.botaoPerfil, { backgroundColor: '#FF4D4D' }]}
          onPress={sair}
          disabled={saindo}
        >
          {saindo ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.textoBotao}>Sair</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
