import { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FiltroRanking, ItemRanking } from '../types';
import { useApp } from '../context/AppContext';
import styles, { CORES } from '../style/style';

// Outros usuários no ranking semanal (user tem pontos + PONTOS_GASTOS_SEMANAL)
const rankingSemanal: ItemRanking[] = [
  { id: 2, nome: 'Ana Silva', pontos: 540 },
  { id: 3, nome: 'Carlos Mendes', pontos: 510 },
  { id: 4, nome: 'Fernanda Costa', pontos: 480 },
  { id: 5, nome: 'João Pereira', pontos: 455 },
];

// Top 5 do ranking anual (user fica na posição 15)
const rankingAnual: ItemRanking[] = [
  { id: 1, nome: 'Lucas Almeida', pontos: 12400 },
  { id: 2, nome: 'Beatriz Santos', pontos: 11800 },
  { id: 3, nome: 'Ricardo Oliveira', pontos: 11200 },
  { id: 4, nome: 'Juliana Martins', pontos: 10600 },
  { id: 5, nome: 'Gabriel Ferreira', pontos: 10100 },
];

// Pontos simulados já gastos/usados antes da sessão atual
const PONTOS_GASTOS_SEMANAL = 230;
const PONTOS_GASTOS_ANUAL = 7500;

// Posição do usuário no ranking (1º no semanal, 15º no anual)
const POSICAO_USUARIO_SEMANAL = 1;
const POSICAO_USUARIO_ANUAL = 15;

// Função para definir cor do círculo
const corCircle = (posicao: number): { backgroundColor: string } => {
  if (posicao === 1) return { backgroundColor: '#099c4b' };
  if (posicao === 2) return { backgroundColor: '#ecba15' };
  if (posicao === 3) return { backgroundColor: '#da3e0f' };
  return { backgroundColor: CORES.primaria };
};

export default function RankingScreen() {
  const [filtro, setFiltro] = useState<FiltroRanking>(FiltroRanking.Semanal);
  const [carregando, setCarregando] = useState<boolean>(true);
  const { habitos } = useApp();

  useEffect(() => {
    // Simula carregamento dos dados do ranking
    const timer = setTimeout(() => setCarregando(false), 600);
    return () => clearTimeout(timer);
  }, [filtro]);

  const handleFiltro = (novoFiltro: FiltroRanking): void => {
    setCarregando(true);
    setFiltro(novoFiltro);
  };

  const pontosGanhos = 300 + habitos.reduce((soma, h) => soma + h.pontos, 0);

  const dados = filtro === FiltroRanking.Semanal ? rankingSemanal : rankingAnual;
  const posicaoUsuario =
    filtro === FiltroRanking.Semanal ? POSICAO_USUARIO_SEMANAL : POSICAO_USUARIO_ANUAL;

  const pontosUsuario =
    filtro === FiltroRanking.Semanal
      ? pontosGanhos + PONTOS_GASTOS_SEMANAL
      : pontosGanhos + PONTOS_GASTOS_ANUAL;

  const listaCompleta =
    filtro === FiltroRanking.Semanal
      ? [{ id: 1, nome: 'Username', pontos: pontosUsuario }, ...dados]
      : dados;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <Text style={styles.titulo}>Ranking</Text>

      {/* Botões de filtro */}
      <View style={styles.filtros}>
        <TouchableOpacity
          style={[styles.botaoFiltro, filtro === FiltroRanking.Semanal && styles.botaoAtivo]}
          onPress={() => handleFiltro(FiltroRanking.Semanal)}
        >
          <Text
            style={[
              styles.textoFiltro,
              filtro === FiltroRanking.Semanal && styles.textoFiltroAtivo,
            ]}
          >
            Semanal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botaoFiltro, filtro === FiltroRanking.Anual && styles.botaoAtivo]}
          onPress={() => handleFiltro(FiltroRanking.Anual)}
        >
          <Text
            style={[styles.textoFiltro, filtro === FiltroRanking.Anual && styles.textoFiltroAtivo]}
          >
            Anual
          </Text>
        </TouchableOpacity>
      </View>

      {/* Estado de carregamento */}
      {carregando ? (
        <View style={{ alignItems: 'center', marginTop: 60 }}>
          <ActivityIndicator size="large" color={CORES.primaria} />
          <Text style={[styles.texto, { color: CORES.textoCinza, marginTop: 12 }]}>
            Carregando ranking...
          </Text>
        </View>
      ) : (
        <>
          {/* Lista de ranking */}
          {listaCompleta.map(item => (
            <View key={item.id} style={styles.cardRanking}>
              <View style={[styles.circle, corCircle(item.id)]}>
                <Text style={styles.numeroRanking}>{item.id}</Text>
              </View>
              <View style={styles.infoRanking}>
                <Text style={styles.nomeRanking}>{item.nome}</Text>
                <Text style={styles.pontosRanking}>{item.pontos} pontos</Text>
              </View>
              {/* Ícone nos 3 primeiros */}
              {item.id <= 3 && (
                <Ionicons name="trophy" size={26} color={CORES.primaria} style={styles.icone} />
              )}
            </View>
          ))}

          {/* Card do usuário */}
          <View style={styles.cardRankingUser}>
            <View
              style={
                filtro === FiltroRanking.Semanal
                  ? styles.bolinhaRankingFirst
                  : styles.bolinhaRanking
              }
            />
            <View
              style={
                filtro === FiltroRanking.Semanal
                  ? styles.posicaoRankingUserFirst
                  : styles.posicaoRankingUser
              }
            >
              <View style={styles.bg}>
                <View style={filtro === FiltroRanking.Semanal ? styles.circleFirst : styles.circle}>
                  <Text style={styles.numeroRanking}>{posicaoUsuario}</Text>
                </View>
                <View style={styles.infoRanking}>
                  <Text
                    style={
                      filtro === FiltroRanking.Semanal
                        ? styles.nomeRankingFirst
                        : styles.nomeRanking
                    }
                  >
                    {filtro === FiltroRanking.Semanal ? 'Você está no Podium!' : 'Username'}
                  </Text>
                  <Text
                    style={[
                      styles.texto,
                      filtro === FiltroRanking.Semanal
                        ? styles.pontosRankingFirst
                        : styles.pontosRanking,
                    ]}
                  >
                    {pontosUsuario} pontos
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
}
