import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { FiltroRanking, ItemRanking } from '../types';
import { useApp } from '../context/AppContext';
import styles from '../style/style';

const rankingSemanal: ItemRanking[] = [
  { id: 1, nome: 'Ana Silva', pontos: 245, posicao: 1 },
  { id: 2, nome: 'Carlos Mendes', pontos: 210, posicao: 2 },
  { id: 3, nome: 'Fernanda Costa', pontos: 198, posicao: 3 },
  { id: 4, nome: 'João Pereira', pontos: 175, posicao: 4 },
  { id: 5, nome: 'Mariana Rocha', pontos: 160, posicao: 5 },
];

const rankingAnual: ItemRanking[] = [
  { id: 1, nome: 'Lucas Almeida', pontos: 3200, posicao: 1 },
  { id: 2, nome: 'Beatriz Santos', pontos: 2980, posicao: 2 },
  { id: 3, nome: 'Ricardo Oliveira', pontos: 2875, posicao: 3 },
  { id: 4, nome: 'Juliana Martins', pontos: 2700, posicao: 4 },
  { id: 5, nome: 'Gabriel Ferreira', pontos: 2500, posicao: 5 },
];

const POSICAO_USUARIO_SEMANAL = 23;
const POSICAO_USUARIO_ANUAL = 15;

// Função para definir cor do círculo
const corCircle = (posicao: number): { backgroundColor: string } => {
  if (posicao === 1) return { backgroundColor: '#099c4b' };
  if (posicao === 2) return { backgroundColor: '#ecba15' };
  if (posicao === 3) return { backgroundColor: '#da3e0f' };
  return { backgroundColor: '#017BC8' };
};

export default function RankingScreen() {
  const [filtro, setFiltro] = useState<FiltroRanking>(FiltroRanking.Semanal);
  const { pontos } = useApp();

  const dados = filtro === FiltroRanking.Semanal ? rankingSemanal : rankingAnual;
  const posicaoUsuario =
    filtro === FiltroRanking.Semanal ? POSICAO_USUARIO_SEMANAL : POSICAO_USUARIO_ANUAL;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <Text style={styles.titulo}>Ranking</Text>

      {/* Botões de filtro */}
      <View style={styles.filtros}>
        <TouchableOpacity
          style={[styles.botaoFiltro, filtro === FiltroRanking.Semanal && styles.botaoAtivo]}
          onPress={() => setFiltro(FiltroRanking.Semanal)}
        >
          <Text
            style={[styles.textoFiltro, filtro === FiltroRanking.Semanal && styles.textoFiltroAtivo]}
          >
            Semanal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botaoFiltro, filtro === FiltroRanking.Anual && styles.botaoAtivo]}
          onPress={() => setFiltro(FiltroRanking.Anual)}
        >
          <Text
            style={[styles.textoFiltro, filtro === FiltroRanking.Anual && styles.textoFiltroAtivo]}
          >
            Anual
          </Text>
        </TouchableOpacity>
      </View>

       {/* Lista de ranking */}
      {dados.map((item) => (
        <View key={item.id} style={styles.cardRanking}>
          <View style={[styles.circle, corCircle(item.posicao)]}>
            <Text style={styles.numeroRanking}>{item.posicao}</Text>
          </View>
          <View style={styles.infoRanking}>
            <Text style={styles.nomeRanking}>{item.nome}</Text>
            <Text style={styles.pontosRanking}>{item.pontos} pontos</Text>
          </View>
          {/* Ícone nos 3 primeiros */}
          {item.posicao <= 3 && (
            <Ionicons name="trophy" size={26} color="#017BC8" style={styles.icone} />
          )}
        </View>
      ))}

      {/* Card do usuário */}
      <View style={styles.cardRankingUser}>
        <View style={styles.bolinhaRanking} />
        <View style={styles.posicaoRankingUser}>
          <View style={styles.bg}>
            <View style={styles.circle}>
              <Text style={styles.numeroRanking}>{posicaoUsuario}</Text>
            </View>
            <View style={styles.infoRanking}>
              <Text style={styles.nomeRanking}>Username</Text>
              <Text style={[styles.texto, styles.pontosRanking]}>{pontos} pontos</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
