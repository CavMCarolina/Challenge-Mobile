import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import styles from '../style/style.js';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
  const navigation = useNavigation();

  const [usuario] = useState({
    nome: 'Username',
    email: 'clt.triste@empresa.com',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zf1l6GpWPrcTWsHvu2lRR0WjSRy7MiLcUA&s',
    cargo: 'Analista de Marketing',
    empresa: 'Tech Solutions Ltda',
    planoSaude: 'Plano Ouro - Vida Saudável',
    numeroCarteirinha: 'PS123456789',
    validadePlano: 'Dezembro/2026',
    pontos: 3642,
    habitosConcluidos: 58,
    nivel: 'Intermediário',
    meta: 'Manter rotina de exercícios 4x por semana',
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Foto e nome */}
      <View style={styles.headerPerfil}>
        <Image source={{ uri: usuario.foto }} style={styles.fotoPerfil} />
        <Text style={styles.titulo}>{usuario.nome}</Text>
        <Text style={styles.comentario}>{usuario.email}</Text>
      </View>

      {/* Informações corporativas */}
      <View style={styles.cardInfo}>
        <Text style={styles.tituloInfo}>Empresa</Text>
        <Text style={styles.texto}>{usuario.empresa}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.tituloInfo}>Cargo</Text>
        <Text style={styles.texto}>{usuario.cargo}</Text>
      </View>

      {/* Plano de saúde */}
      <View style={styles.cardInfo}>
        <Text style={styles.tituloInfo}>Plano de Saúde</Text>
        <Text style={styles.texto}>{usuario.planoSaude}</Text>
        <Text style={styles.texto}>Carteirinha: {usuario.numeroCarteirinha}</Text>
        <Text style={styles.texto}>Validade: {usuario.validadePlano}</Text>
      </View>

      {/* Pontos e progresso */}
      <View style={styles.cardInfo}>
        <Text style={styles.tituloInfo}>Seus pontos</Text>
        <Text style={styles.texto}>{usuario.pontos}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.tituloInfo}>Hábitos concluídos</Text>
        <Text style={styles.texto}>{usuario.habitosConcluidos}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.tituloInfo}>Nível atual</Text>
        <Text style={styles.texto}>{usuario.nivel}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.tituloInfo}>Meta</Text>
        <Text style={styles.texto}>{usuario.meta}</Text>
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

        <Button
          title="Sair"
          color="#FF4D4D"
          onPress={() => navigation.navigate('Login')} // Volta para o Login
        />
      </View>
    </ScrollView>
  );
}
