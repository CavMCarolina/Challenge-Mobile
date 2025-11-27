import { View, Text, Image, TouchableOpacity, ScrollView, Button} from 'react-native';
import styles from '../style/style.js';
import { useNavigation } from '@react-navigation/native';


export default function Perfil() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <Text style={styles.titulo}>Meu Perfil</Text>

      {/* Imagem de perfil */}
      <View style={styles.perfilContainer}>
        <Image
          source={require('../assets/gatinho.jpg')}
          style={styles.perfilImagem}
        />
        <Text style={styles.tituloBranco}>Gatinho Nerdola</Text>
        <Text style={styles.perfilEmail}>teste@fiap.com.br</Text>
      </View>

      {/* Estatísticas */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.tituloRoxo}>1</Text>
          <Text style={styles.texto}>Cursos</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.tituloRoxo}>42h</Text>
          <Text style={styles.texto}>Estudo</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.tituloRoxo}>120</Text>
          <Text style={styles.texto}>Exercícios</Text>
        </View>
      </View>

      {/* Conquistas */}
      <Text style={styles.tituloRoxo}>Conquistas</Text>
      <View style={styles.badgesContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeIcon}>🥇</Text>
          <Text style={styles.texto}>Primeiro curso</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeIcon}>🔥</Text>
          <Text style={styles.texto}>Semana ativa</Text>
        </View>
      </View>

      {/* Botões de ação */}
      <Text style={styles.tituloRoxo}>Ações</Text>
      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Meus Certificados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Histórico de Atividades</Text>
        </TouchableOpacity>

        <Button
          title="Sair"
          color="#9237fa" // Cor diferente para destacar (e porque ele já seria diferente por ser um Button :c)
          onPress={() => navigation.navigate('Login')} // Volta para o Login
        />
      </View>
    </ScrollView>
  );
}