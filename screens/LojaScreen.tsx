import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { ItemLoja } from '../types';
import { useApp } from '../context/AppContext';
import styles from '../style/style';

const lojaSaudavel: ItemLoja[] = [
  {
    id: 1,
    nome: 'Aula de Yoga Online',
    custo: 150,
    descricao: 'Sessão de 1h para relaxamento e alongamento.',
  },
  {
    id: 2,
    nome: 'E-book de Receitas Saudáveis',
    custo: 100,
    descricao: 'Receitas práticas e nutritivas para o dia a dia.',
  },
  {
    id: 3,
    nome: 'Consulta com Nutricionista (desconto)',
    custo: 300,
    descricao: 'Voucher de desconto para consulta nutricional.',
  },
  {
    id: 4,
    nome: 'Consulta com Personal Trainer (desconto)',
    custo: 250,
    descricao: 'Sessão individual com personal trainer para treinos personalizados.',
  },
  {
    id: 5,
    nome: 'Podcast Exclusivo de Bem-estar',
    custo: 80,
    descricao: 'Conteúdo premium sobre saúde e hábitos saudáveis.',
  },
  {
    id: 6,
    nome: 'Workshop de Meditação Guiada',
    custo: 120,
    descricao: 'Aula prática de técnicas de relaxamento e mindfulness.',
  },
  {
    id: 7,
    nome: 'Desconto em Academia Parceira',
    custo: 200,
    descricao: 'Voucher de desconto para mensalidade em academias parceiras.',
  },
  {
    id: 8,
    nome: 'Sessão de Relaxamento Mental',
    custo: 180,
    descricao: 'Sessão guiada de respiração e relaxamento para reduzir estresse.',
  },
];

export default function LojaScreen() {
  const { pontos, gastarPontos } = useApp();
  const [comprando, setComprando] = useState<number | null>(null);

  const comprarItem = async (item: ItemLoja): Promise<void> => {
    setComprando(item.id);
    try {
      const sucesso = await gastarPontos(item.custo);
      if (sucesso) {
        Alert.alert('Compra realizada!', `Você comprou: ${item.nome}!`);
      } else {
        Alert.alert('Pontos insuficientes', 'Você não tem pontos suficientes para esta compra.');
      }
    } finally {
      setComprando(null);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Pontos do usuário */}
      <Text style={styles.titulo}>Seus pontos: {pontos}</Text>

      {lojaSaudavel.map(item => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.subtitulo}>{item.nome}</Text>
          <Text style={styles.texto}>{item.descricao}</Text>
          <Text style={styles.negrito}>{item.custo} pontos</Text>

          <TouchableOpacity
            style={styles.botaoComprar}
            onPress={() => comprarItem(item)}
            disabled={comprando !== null}
          >
            {comprando === item.id ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.textoBotao}>Comprar</Text>
            )}
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
