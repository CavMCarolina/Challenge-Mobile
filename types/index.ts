export enum CategoriaHabito {
  AtividadeFisica = 'Atividade Física',
  Alimentacao = 'Alimentação',
  Sono = 'Sono',
  BemEstar = 'Bem-estar',
}

export enum FiltroRanking {
  Semanal = 'semanal',
  Anual = 'anual',
}

export interface Habito {
  id: string;
  nome: string;
  categoria: CategoriaHabito;
  foto: string;
  pontos: number;
}

export interface ItemLoja {
  id: number;
  nome: string;
  custo: number;
  descricao: string;
}

export interface ItemRanking {
  id: number;
  nome: string;
  pontos: number;
  posicao: number;
}

export interface Usuario {
  nome: string;
  email: string;
  foto: string;
  cargo: string;
  empresa: string;
  planoSaude: string;
  numeroCarteirinha: string;
  validadePlano: string;
  habitosConcluidos: number;
  nivel: string;
  meta: string;
}

export interface Artigo {
  id: string;
  titulo: string;
  resumo: string;
  url: string;
}

export type RootStackParamList = {
  Login: undefined;
  App: undefined;
  WebViewScreen: { url: string };
};

export interface AppContextType {
  pontos: number;
  habitos: Habito[];
  adicionarHabito: (habito: Habito) => Promise<void>;
  gastarPontos: (valor: number) => Promise<boolean>;
}
