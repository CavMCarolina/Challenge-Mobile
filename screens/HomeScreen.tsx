import { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import { iotService } from '../services/iotService';
import { Artigo, IoTStatus, RootStackParamList, SensorData, TabParamList } from '../types';
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
    resumo:
      'Entenda como combinar proteínas, carboidratos e vegetais para manter energia e saúde no dia a dia...',
    url: 'https://www.uol.com.br/vivabem/noticias/redacao/2025/11/10/alimentacao-balanceada-como-montar-pratos-saudaveis.htm',
  },
];

const statusCor: Record<IoTStatus, string> = {
  desconectado: '#999',
  conectando: '#f39c12',
  conectado: '#27ae60',
  erro: '#e74c3c',
};

const statusLabel: Record<IoTStatus, string> = {
  desconectado: 'Desconectado',
  conectando: 'Conectando...',
  conectado: 'Conectado',
  erro: 'Erro de conexão',
};

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
  const { pontos } = useApp();

  const [iotStatus, setIotStatus] = useState<IoTStatus>('desconectado');
  const [sensorData, setSensorData] = useState<SensorData | null>(null);

  useEffect(() => {
    iotService.onStatusChange(setIotStatus);
    iotService.onSensorData(setSensorData);
    return () => {
      iotService.desconectar();
    };
  }, []);

  const handleConectar = useCallback(() => {
    iotService.conectarIP();
  }, []);

  const handleDesconectar = useCallback(() => {
    iotService.desconectar();
    setSensorData(null);
  }, []);

  const formatarHora = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const corAtividade = (nivel: string) => {
    if (nivel === 'Alto') return '#27ae60';
    if (nivel === 'Moderado') return '#f39c12';
    return '#e74c3c';
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <Text style={styles.titulo}>Bem-vindo(a)!</Text>

      {/* Card de pontos */}
      <View style={styles.pontosContainer}>
        <View style={styles.pontosHome}>
          <Text style={styles.pontosHomeTitulo}>{pontos} PONTOS ACUMULADOS</Text>
          <Text style={styles.texto}>Acesse a loja e troque seus pontos</Text>
          <TouchableOpacity style={styles.lojaHome} onPress={() => navigation.navigate('Loja')}>
            <Text style={[styles.texto, styles.link]}>Ir para a loja</Text>
            <Ionicons name="arrow-forward-circle-outline" size={24} color="#017BC8" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Card Monitor de Saúde IoT */}
      <Text style={styles.titulo}>Monitor de Saúde</Text>
      <View style={styles.cardIoT}>
        <View style={styles.cardIoTHeader}>
          <Text style={[styles.subtitulo, { fontWeight: 'bold' }]}>Sensor IoT</Text>
          <View style={styles.iotStatusRow}>
            <View style={[styles.iotStatusDot, { backgroundColor: statusCor[iotStatus] }]} />
            <Text style={[styles.iotStatusText, { color: statusCor[iotStatus] }]}>
              {statusLabel[iotStatus]}
            </Text>
          </View>
        </View>

        {iotStatus !== 'conectado' && (
          <TouchableOpacity
            style={[styles.iotBotaoConectar, iotStatus === 'conectando' && { opacity: 0.6 }]}
            onPress={handleConectar}
            disabled={iotStatus === 'conectando'}
          >
            {iotStatus === 'conectando' ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.iotBotaoTexto}>Conectar</Text>
            )}
          </TouchableOpacity>
        )}

        {iotStatus === 'conectado' && (
          <TouchableOpacity style={styles.iotBotaoDesconectar} onPress={handleDesconectar}>
            <Text style={styles.iotBotaoTexto}>Desconectar</Text>
          </TouchableOpacity>
        )}

        {iotStatus === 'erro' && (
          <Text style={styles.iotErro}>
            Não foi possível conectar. Verifique o IP e se o servidor está rodando.
          </Text>
        )}

        {/* Dados do sensor */}
        {sensorData ? (
          <>
            <View style={[styles.iotGrid, { marginTop: 14 }]}>
              <View style={styles.iotMetrica}>
                <Text style={styles.iotMetricaValor}>
                  ❤️ {sensorData.frequenciaCardiaca} <Text style={{ fontSize: 14 }}>bpm</Text>
                </Text>
                <Text style={styles.iotMetricaLabel}>Frequência Cardíaca</Text>
              </View>
              <View style={styles.iotMetrica}>
                <Text style={styles.iotMetricaValor}>
                  👟 {sensorData.passos.toLocaleString('pt-BR')}
                </Text>
                <Text style={styles.iotMetricaLabel}>Passos</Text>
              </View>
              <View style={styles.iotMetrica}>
                <Text style={styles.iotMetricaValor}>
                  🌡️ {sensorData.temperatura} <Text style={{ fontSize: 14 }}>°C</Text>
                </Text>
                <Text style={styles.iotMetricaLabel}>Temperatura</Text>
              </View>
              <View
                style={[
                  styles.iotMetrica,
                  { backgroundColor: corAtividade(sensorData.nivelAtividade) + '22' },
                ]}
              >
                <Text
                  style={[
                    styles.iotMetricaValor,
                    { color: corAtividade(sensorData.nivelAtividade), fontSize: 16 },
                  ]}
                >
                  ⚡ {sensorData.nivelAtividade}
                </Text>
                <Text style={styles.iotMetricaLabel}>Nível de Atividade</Text>
              </View>
            </View>
            <Text style={styles.iotTimestamp}>
              Atualizado às {formatarHora(sensorData.timestamp)}
            </Text>
          </>
        ) : iotStatus === 'conectado' ? (
          <ActivityIndicator color="#017BC8" style={{ marginTop: 16 }} />
        ) : (
          <Text style={[styles.iotMetricaLabel, { textAlign: 'center', marginTop: 8 }]}>
            Conecte ao servidor para ver dados em tempo real
          </Text>
        )}
      </View>

      {/* Seção de artigos */}
      <Text style={styles.titulo}>Hábitos Saudáveis</Text>

      {artigos.map(item => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.subtitulo}>{item.titulo}</Text>
          <Text style={styles.texto}>{item.resumo}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('WebViewScreen', { url: item.url })}>
            <Text style={[styles.negrito, styles.link]}>Ler mais...</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
