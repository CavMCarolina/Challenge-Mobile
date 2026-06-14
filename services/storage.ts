import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Habito } from '../types';

const KEYS = {
  PONTOS: '@caretrack:pontos',
  HABITOS: '@caretrack:habitos',
  SESSAO: 'caretrack_sessao',
} as const;

export const StorageService = {
  async salvarPontos(pontos: number): Promise<void> {
    await AsyncStorage.setItem(KEYS.PONTOS, JSON.stringify(pontos));
  },

  async carregarPontos(): Promise<number> {
    const valor = await AsyncStorage.getItem(KEYS.PONTOS);
    return valor !== null ? (JSON.parse(valor) as number) : 300;
  },

  async salvarHabitos(habitos: Habito[]): Promise<void> {
    await AsyncStorage.setItem(KEYS.HABITOS, JSON.stringify(habitos));
  },

  async carregarHabitos(): Promise<Habito[]> {
    const valor = await AsyncStorage.getItem(KEYS.HABITOS);
    return valor !== null ? (JSON.parse(valor) as Habito[]) : [];
  },

  // Sessão armazenada de forma segura (criptografada pelo SecureStore)
  async salvarSessao(cpf: string): Promise<void> {
    await SecureStore.setItemAsync(KEYS.SESSAO, cpf);
  },

  async carregarSessao(): Promise<string | null> {
    return SecureStore.getItemAsync(KEYS.SESSAO);
  },

  async limparSessao(): Promise<void> {
    await SecureStore.deleteItemAsync(KEYS.SESSAO);
  },

  async resetarTudo(): Promise<void> {
    await AsyncStorage.multiRemove([KEYS.PONTOS, KEYS.HABITOS]);
  },
};
