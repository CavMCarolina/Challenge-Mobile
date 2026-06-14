import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppContextType, Habito } from '../types';
import { StorageService } from '../services/storage';
import { NotificationService } from '../services/notificationService';

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [pontos, setPontos] = useState<number>(300);
  const [habitos, setHabitos] = useState<Habito[]>([]);

  useEffect(() => {
    async function carregarDados(): Promise<void> {
      const [pontosStorage, habitosStorage] = await Promise.all([
        StorageService.carregarPontos(),
        StorageService.carregarHabitos(),
      ]);
      setPontos(pontosStorage);
      setHabitos(habitosStorage);

      // Solicita permissão e agenda lembrete diário de hábitos
      await NotificationService.configurarLembretesDiarios();
    }
    carregarDados();
  }, []);

  const adicionarHabito = async (habito: Habito): Promise<void> => {
    const novosHabitos = [habito, ...habitos];
    const novosPontos = pontos + habito.pontos;
    setHabitos(novosHabitos);
    setPontos(novosPontos);
    await Promise.all([
      StorageService.salvarHabitos(novosHabitos),
      StorageService.salvarPontos(novosPontos),
    ]);
  };

  const gastarPontos = async (valor: number): Promise<boolean> => {
    if (pontos < valor) return false;
    const novosPontos = pontos - valor;
    setPontos(novosPontos);
    await StorageService.salvarPontos(novosPontos);
    return true;
  };

  const resetarPontos = async (): Promise<void> => {
    await StorageService.resetarTudo();
    setPontos(0);
    setHabitos([]);
  };

  return (
    <AppContext.Provider value={{ pontos, habitos, adicionarHabito, gastarPontos, resetarPontos }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp deve ser usado dentro de AppProvider');
  return context;
}
