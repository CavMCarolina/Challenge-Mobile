import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // precisa instalar expo install @expo/vector-icons
import styles from '../style/style.js';

const rankingSemanal = [
  { id: 1, nome: 'Ana Silva', pontos: 245, posicao: 1 },
  { id: 2, nome: 'Carlos Mendes', pontos: 210, posicao: 2 },
  { id: 3, nome: 'Fernanda Costa', pontos: 198, posicao: 3 },
  { id: 4, nome: 'João Pereira', pontos: 175, posicao: 4 },
  { id: 5, nome: 'Mariana Rocha', pontos: 160, posicao: 5 }
];

const rankingAnual = [
  { id: 1, nome: 'Lucas Almeida', pontos: 3200, posicao: 1 },
  { id: 2, nome: 'Beatriz Santos', pontos: 2980, posicao: 2 },
  { id: 3, nome: 'Ricardo Oliveira', pontos: 2875, posicao: 3 },
  { id: 4, nome: 'Juliana Martins', pontos: 2700, posicao: 4 },
  { id: 5, nome: 'Gabriel Ferreira', pontos: 2500, posicao: 5 }
];

// pontos e posição do usuário
const usuario = {
  nome: 'Username',
  semanal: { pontos: 104, posicao: 23 },
  anual: { pontos: 1870, posicao: 15 },
};

export default function Ranking() {
  // Filtro do Ranking
  const [filtro, setFiltro] = useState('semanal'); // estado inicial

  const dados = filtro === 'semanal' ? rankingSemanal : rankingAnual;
  const pontosUsuario = filtro === 'semanal' ? usuario.semanal.pontos : usuario.anual.pontos;
  const posicaoUsuario = filtro === 'semanal' ? usuario.semanal.posicao : usuario.anual.posicao;

  // Função para definir cor do círculo
  const corCircle = (posicao) => {
    if (posicao === 1) return { backgroundColor: '#099c4bff' };
    if (posicao === 2) return { backgroundColor: '#ecba15ff' };
    if (posicao === 3) return { backgroundColor: '#da3e0fff' };
    return { backgroundColor: '#017BC8' }; // padrão
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <Text style={styles.titulo}>Ranking</Text>

      {/* Botões de filtro */}
      <View style={styles.filtros}>
        <TouchableOpacity
          style={[styles.botaoFiltro, filtro === 'semanal' && styles.botaoAtivo]}
          onPress={() => setFiltro('semanal')}
        >
          <Text style={[styles.textoFiltro, filtro === 'semanal' && styles.textoFiltroAtivo]}>Semanal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botaoFiltro, filtro === 'anual' && styles.botaoAtivo]}
          onPress={() => setFiltro('anual')}
        >
          <Text style={[styles.textoFiltro, filtro === 'anual' && styles.textoFiltroAtivo]}>Anual</Text>
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
        <View style={styles.bolinhaRanking}></View>
          <View style={styles.posicaoRankingUser}>
            <View style={styles.bg}>
              <View style={styles.circle}>
                <Text style={styles.numeroRanking}>{posicaoUsuario}</Text>
              </View>
            <View style={styles.infoRanking}>
              <Text style={styles.nomeRanking}>Username</Text>
              <Text style={[styles.texto, styles.pontosRanking]}>{pontosUsuario} pontos</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
