import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../style/style.js';

// Exercícios por categoria
const exercicios = {
  'Front-End': [
    { id: 1, titulo: 'HTML Básico' },
    { id: 2, titulo: 'CSS Layouts' },
    { id: 3, titulo: 'JavaScript Essencial' },
    { id: 4, titulo: 'React Componentes' },
    { id: 5, titulo: 'Angular Fundamentos' },
  ],
  'UX e Design': [
    { id: 1, titulo: 'Fundamentos de UX' },
    { id: 2, titulo: 'Design Thinking' },
    { id: 3, titulo: 'Figma Avançado' },
    { id: 4, titulo: 'UI Design Moderno' },
    { id: 5, titulo: 'Acessibilidade Digital' },
  ],
  'Mobile': [
    { id: 1, titulo: 'React Native Básico' },
    { id: 2, titulo: 'Flutter Essencial' },
    { id: 3, titulo: 'Kotlin Android' },
    { id: 4, titulo: 'Swift iOS' },
    { id: 5, titulo: 'Publicação de Apps' },
  ],
  'Programação': [
    { id: 1, titulo: 'Lógica de Programação' },
    { id: 2, titulo: 'Python Básico' },
    { id: 3, titulo: 'Java Essencial' },
    { id: 4, titulo: 'C# Iniciantes' },
    { id: 5, titulo: 'Git e GitHub' },
  ],
  'DataScience': [
    { id: 1, titulo: 'Introdução ao Data Science' },
    { id: 2, titulo: 'Estatística para Dados' },
    { id: 3, titulo: 'Python para Dados' },
    { id: 4, titulo: 'Machine Learning Básico' },
    { id: 5, titulo: 'Visualização de Dados' },
  ],
  'Inteligência Artificial': [
    { id: 1, titulo: 'Fundamentos de IA' },
    { id: 2, titulo: 'Redes Neurais' },
    { id: 3, titulo: 'Processamento de Imagens' },
    { id: 4, titulo: 'NLP Básico' },
    { id: 5, titulo: 'IA Ética' },
  ],
};

export default function Exercicios() {
  const [categoria, setCategoria] = useState('Front-End');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <Text style={styles.titulo}>Treine com Exercícios!</Text>

      {/* Picker estilizado */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={categoria}
          style={styles.texto}
          dropdownIconColor="#ecececff"
          onValueChange={(itemValue) => setCategoria(itemValue)}
        >
          <Picker.Item label="Front-End" value="Front-End" />
          <Picker.Item label="UX e Design" value="UX e Design" />
          <Picker.Item label="Mobile" value="Mobile" />
          <Picker.Item label="Programação" value="Programação" />
          <Picker.Item label="DataScience" value="DataScience" />
          <Picker.Item label="Inteligência Artificial" value="Inteligência Artificial" />
        </Picker>
      </View>

      {/* Exercícios com Map */}
      {exercicios[categoria].map((ex, index) => (
        <View key={ex.id} style={styles.exercicioContainer}>
          {/* Bolinha */}
          <View style={styles.bolinha}>
            <Text style={styles.tituloBranco}>
              {ex.id}
            </Text>
          </View>

          {/* Nome do exercício */}
          <Text style={styles.texto}>{ex.titulo}</Text>

          {/* Linha de conexão */}
          {index < exercicios[categoria].length - 1 && (
            <View style={styles.linha} />
          )}
        </View>
      ))}
    </ScrollView>
  );
}
