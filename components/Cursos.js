import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../style/style.js';

const meusCursos = [
  { id: 1, titulo: 'React Native Básico', carga: '20 horas', progresso: 0.4 },
  { id: 2, titulo: 'UI/UX Essentials', carga: '15 horas', progresso: 0.7 },
  { id: 3, titulo: 'Python para Dados', carga: '20 horas', progresso: 1.0 },
  { id: 4, titulo: 'Machine Learning Básico', carga: '22 horas', progresso: 0.55 },
];

export default function MeusCursos() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <Text style={styles.titulo}>Meus Cursos</Text>

      {/* Map com os cursos de exemplo :) */}
      {meusCursos.map((curso) => (
        <View key={curso.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitulo}>{curso.titulo}</Text>
            <Text style={styles.cardCarga}>{curso.carga}</Text>
          </View>

          {/* Barra de progresso */}
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${curso.progresso * 100}%` }]} />
          </View>
          <Text style={styles.cardDescricao}>{Math.round(curso.progresso * 100)}% concluído</Text>

          {/* Botão condicional */}
          {curso.progresso < 1 ? (
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Continuar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.botaoCertificado}>
              <Text style={styles.textoBotao}>Gerar Certificado</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
}