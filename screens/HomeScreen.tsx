import { useNavigation } from '@react-navigation/native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import { Artigo, RootStackParamList, TabParamList } from '../types';
import styles from '../style/style';

type HomeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const artigos: Artigo[] = [
  {
    id: '1',
    titulo: '8 hábitos saudáveis para transformar seu ano',
    resumo: 'Ajustar rotina de sono, ler diariamente e pequenas mudanças que trazem bem-estar...',
    url: 'https://www.terra.com.br/vida-e-estilo/comportamento/metas-para-2026-8-habitos-saudaveis-que-vao-transformar-o-seu-ano,7d84dccecdce388615d94449832f17754cy1oq9o.html',
  },
  {
    id: '2',
    titulo: 'Hábitos simples que podem prejudicar sua saúde',
    resumo: 'Consumo frequente de álcool e falta de frutas e vegetais podem afetar o corpo...',
    url: 'https://www.correiobraziliense.com.br/cbradar/os-habitos-simples-e-cotidianos-que-podem-estar-prejudicando-sua-saude/',
  },
  {
    id: '3',
    titulo: '5 hábitos que ajudam a limpar as artérias',
    resumo: 'Reduzir fatores de risco e adotar estilo de vida saudável para proteger o coração...',
    url: 'https://www.metropoles.com/colunas/claudia-meireles/cardiologista-cita-5-habitos-simples-que-ajudam-a-limpar-as-arterias',
  },
  {
    id: '4',
    titulo: 'Alimentação balanceada: como montar pratos saudáveis',
    resumo: 'Entenda como combinar proteínas, carboidratos e vegetais para manter energia e saúde no dia a dia...',
    url: 'https://www.uol.com.br/vivabem/noticias/redacao/2025/11/10/alimentacao-balanceada-como-montar-pratos-saudaveis.htm',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
  const { pontos } = useApp();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <Text style={styles.titulo}>Bem-vindo(a)!</Text>
      <View style={styles.pontosContainer}>
        <View style={styles.pontosHome}>
          <Text style={styles.pontosHomeTitulo}>{pontos} PONTOS ACUMULADOS</Text>
          <Text style={styles.texto}>Acesse a loja e troque seus pontos</Text>
          <TouchableOpacity
            style={styles.lojaHome}
            onPress={() => navigation.navigate('Loja')}
          >
            <Text style={[styles.texto, styles.link]}>Ir para a loja</Text>
            <Ionicons name="arrow-forward-circle-outline" size={24} color="#017BC8" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Seção de artigos */}
      <Text style={styles.titulo}>Hábitos Saudáveis</Text>

      {artigos.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.subtitulo}>{item.titulo}</Text>
          <Text style={styles.texto}>{item.resumo}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('WebViewScreen', { url: item.url })}
          >
            <Text style={[styles.negrito, styles.link]}>Ler mais...</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
