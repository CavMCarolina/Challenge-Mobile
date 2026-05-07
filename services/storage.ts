import AsyncStorage from '@react-native-async-storage/async-storage';
import { Habito } from '../types';

const KEYS = {
  PONTOS: '@caretrack:pontos',
  HABITOS: '@caretrack:habitos',
  SESSAO: '@caretrack:sessao',
} as const;

export const StorageService = {
  async salvarPontos(pontos: number): Promise<void> {
    await AsyncStorage.setItem(KEYS.PONTOS, JSON.stringify(pontos));
  },

  async carregarPontos(): Promise<number> {
    const valor = await AsyncStorage.getItem(KEYS.PONTOS);
    return valor !== null ? (JSON.parse(valor) as number) : 3642;
  },

  async salvarHabitos(habitos: Habito[]): Promise<void> {
    await AsyncStorage.setItem(KEYS.HABITOS, JSON.stringify(habitos));
  },

  async carregarHabitos(): Promise<Habito[]> {
    const valor = await AsyncStorage.getItem(KEYS.HABITOS);
    return valor !== null ? (JSON.parse(valor) as Habito[]) : [];
  },

  async salvarSessao(cpf: string): Promise<void> {
    await AsyncStorage.setItem(KEYS.SESSAO, cpf);
  },

  async carregarSessao(): Promise<string | null> {
    return AsyncStorage.getItem(KEYS.SESSAO);
  },

  async limparSessao(): Promise<void> {
    await AsyncStorage.removeItem(KEYS.SESSAO);
  },
};
