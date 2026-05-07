import { View, Text, Image } from 'react-native';
import { Habito } from '../types';
import styles from '../style/style';

interface HabitCardProps {
  habito: Habito;
}

export default function HabitCard({ habito }: HabitCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardTitulo}>
        <Text style={styles.subtitulo}>{habito.nome}</Text>
        <Text style={styles.subtitulo}>{habito.pontos} pontos</Text>
      </View>
      <Text style={styles.texto}>Categoria: {habito.categoria}</Text>
      <Image source={{ uri: habito.foto }} style={styles.fotoCard} />
    </View>
  );
}
