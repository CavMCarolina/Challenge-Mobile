import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../style/style.js';

// Criação de vários cursos para diferentes categorias
const trilhas = [
  // Front-End
  { id: '1', categoria: 'Front-End', titulo: 'HTML & CSS Básico', descricao: 'Fundamentos da web.', carga: '12 horas' },
  { id: '2', categoria: 'Front-End', titulo: 'JavaScript Essencial', descricao: 'Lógica e interatividade.', carga: '18 horas' },
  { id: '3', categoria: 'Front-End', titulo: 'React para Iniciantes', descricao: 'Componentes e estado.', carga: '20 horas' },
  { id: '4', categoria: 'Front-End', titulo: 'Vue.js Básico', descricao: 'Framework progressivo.', carga: '15 horas' },
  { id: '5', categoria: 'Front-End', titulo: 'Angular Fundamentos', descricao: 'Arquitetura e módulos.', carga: '22 horas' },

  // UX e Design
  { id: '6', categoria: 'UX e Design', titulo: 'Fundamentos de UX', descricao: 'Experiência do usuário.', carga: '14 horas' },
  { id: '7', categoria: 'UX e Design', titulo: 'Design Thinking', descricao: 'Metodologia criativa.', carga: '12 horas' },
  { id: '8', categoria: 'UX e Design', titulo: 'Figma Avançado', descricao: 'Protótipos e colaboração.', carga: '16 horas' },
  { id: '9', categoria: 'UX e Design', titulo: 'UI Design Moderno', descricao: 'Interfaces visuais.', carga: '18 horas' },
  { id: '10', categoria: 'UX e Design', titulo: 'Acessibilidade Digital', descricao: 'Design inclusivo.', carga: '10 horas' },

  // Mobile
  { id: '11', categoria: 'Mobile', titulo: 'React Native Básico', descricao: 'Criação de apps móveis.', carga: '20 horas' },
  { id: '12', categoria: 'Mobile', titulo: 'Flutter Essencial', descricao: 'Apps multiplataforma.', carga: '22 horas' },
  { id: '13', categoria: 'Mobile', titulo: 'Kotlin para Android', descricao: 'Desenvolvimento nativo.', carga: '18 horas' },
  { id: '14', categoria: 'Mobile', titulo: 'Swift para iOS', descricao: 'Apps para iPhone.', carga: '20 horas' },
  { id: '15', categoria: 'Mobile', titulo: 'Publicação de Apps', descricao: 'Play Store e App Store.', carga: '12 horas' },

  // Programação
  { id: '16', categoria: 'Programação', titulo: 'Lógica de Programação', descricao: 'Algoritmos e estruturas.', carga: '15 horas' },
  { id: '17', categoria: 'Programação', titulo: 'Python Básico', descricao: 'Sintaxe e fundamentos.', carga: '18 horas' },
  { id: '18', categoria: 'Programação', titulo: 'Java Essencial', descricao: 'Orientação a objetos.', carga: '20 horas' },
  { id: '19', categoria: 'Programação', titulo: 'C# para Iniciantes', descricao: 'Aplicações desktop.', carga: '16 horas' },
  { id: '20', categoria: 'Programação', titulo: 'Git e GitHub', descricao: 'Controle de versão.', carga: '12 horas' },

  // DataScience
  { id: '21', categoria: 'DataScience', titulo: 'Introdução ao Data Science', descricao: 'Conceitos básicos.', carga: '14 horas' },
  { id: '22', categoria: 'DataScience', titulo: 'Estatística para Dados', descricao: 'Probabilidade e análise.', carga: '18 horas' },
  { id: '23', categoria: 'DataScience', titulo: 'Python para Dados', descricao: 'Pandas e NumPy.', carga: '20 horas' },
  { id: '24', categoria: 'DataScience', titulo: 'Machine Learning Básico', descricao: 'Modelos preditivos.', carga: '22 horas' },
  { id: '25', categoria: 'DataScience', titulo: 'Visualização de Dados', descricao: 'Gráficos e dashboards.', carga: '16 horas' },

  // Inteligência Artificial
  { id: '26', categoria: 'Inteligência Artificial', titulo: 'Fundamentos de IA', descricao: 'História e conceitos.', carga: '12 horas' },
  { id: '27', categoria: 'Inteligência Artificial', titulo: 'Redes Neurais', descricao: 'Arquiteturas básicas.', carga: '20 horas' },
  { id: '28', categoria: 'Inteligência Artificial', titulo: 'Processamento de Imagens', descricao: 'Visão computacional.', carga: '18 horas' },
  { id: '29', categoria: 'Inteligência Artificial', titulo: 'NLP Básico', descricao: 'Processamento de linguagem.', carga: '16 horas' },
  { id: '30', categoria: 'Inteligência Artificial', titulo: 'IA Ética', descricao: 'Impactos sociais.', carga: '10 horas' },
];

export default function Home() {
  const [categoria, setCategoria] = useState('Todas');

  const trilhasFiltradas = categoria === 'Todas'
    ? trilhas
    : trilhas.filter(t => t.categoria === categoria);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <Text style={styles.titulo}>Trilhas de Aprendizado</Text>

      {/* Colocando o Picker dentro de um View para conseguir estilizar */}
      <View style={styles.pickerContainer}>
        {/* Picker com todas as categorias */}
        <Picker
          selectedValue={categoria}
          style={styles.texto}
          dropdownIconColor="#ecececff" 
          onValueChange={(itemValue) => setCategoria(itemValue)}
        >
          <Picker.Item label="Todas" value="Todas" />
          <Picker.Item label="Front-End" value="Front-End" />
          <Picker.Item label="UX e Design" value="UX e Design" />
          <Picker.Item label="Mobile" value="Mobile" />
          <Picker.Item label="Programação" value="Programação" />
          <Picker.Item label="DataScience" value="DataScience" />
          <Picker.Item label="Inteligência Artificial" value="Inteligência Artificial" />
        </Picker>
      </View>

      {/* Map para percorrer todos os cursos */}
      {trilhasFiltradas.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.tituloRoxo}>{item.titulo}</Text>
            <Text style={styles.cardCarga}>{item.carga}</Text>
          </View>
          <Text style={styles.cardDescricao}>{item.descricao}</Text>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Começar</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}