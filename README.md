# 📱 CareTrack
Aplicativo mobile para acompanhamento de hábitos saudáveis de funcionários de empresas com plano de saúde corporativo.  
O app incentiva o bem-estar através de gamificação, com pontos, ranking e loja de recompensas.

## 🚀 Funcionalidades

- **Home**
  - Indicação de artigos para o usuário ler
  - Conscientização de hábitos saudáveis
  - Pontuação explícita e redirecionamento para loja

- **Cadastro de hábitos**  
  - Funcionário só pode adicionar hábito se tirar uma foto e escrever o nome 
  - Cada hábito vale 30 pontos 
  - Categorias: Atividade Física, Alimentação, Sono, Bem-estar  

- **Perfil do usuário**  
  - Informações pessoais (nome, email, cargo)  
  - Dados da empresa e do plano de saúde (carteirinha, validade, tipo de plano)  
  - Progresso: pontos acumulados, hábitos concluídos, nível e metas  

- **Ranking**  
  - Ranking semanal e anual  
  - Destaque para os 3 primeiros colocados com cores (verde, amarelo e vermelho) e troféu
  - Indicação da posição do Usuário explícita

- **Loja de recompensas**  
  - Itens que podem ser trocados por pontos:  
    - Aula de Yoga Online  
    - E-book de Receitas Saudáveis  
    - Consulta com Nutricionista (desconto)  
    - Consulta com Personal Trainer (desconto)
    - Workshop de Meditação Guiada  
    - Podcast Exclusivo de Bem-estar  
    - Sessão de Relaxamento Mental  
    - Desconto em Academia Parceira  

## 🛠️ Tecnologias utilizadas

- [React Native](https://reactnative.dev/)  
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/)
- [@react-navigation/native](https://reactnavigation.org/) 
- [@react-native-picker/picker](https://github.com/react-native-picker/picker)  
- [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)  
- [expo-google-fonts/montserrat](https://github.com/expo/google-fonts)  
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/)  

## 📂 Estrutura de diretórios
    CareTrack/
    ├── assets/
    │   ├── icon.png
    │   └── logo.png
    ├── screens/
    │   ├── LoginScreen.tsx
    │   ├── HomeScreen.tsx
    │   ├── HabitosScreen.tsx
    │   ├── RankingScreen.tsx
    │   ├── LojaScreen.tsx
    │   └── PerfilScreen.tsx
    ├── components/
    │   └── HabitCard.tsx
    ├── services/
    │   └── storage.ts
    ├── context/
    │   └── AppContext.tsx
    ├── types/
    │   └── index.ts
    ├── navigation/
    │   ├── TabNavigation.tsx
    │   └── WebViewScreen.tsx
    ├── style/
    │   └── style.ts
    ├── App.tsx
    ├── tsconfig.json
    └── package.json

## ⚙️ Instalação e execução
- Clone este repositório:
    ```
    git clone https://github.com/CavMCarolina/Challenge-Mobile.git
    cd Challenge-Mobile
    ```
- Instale as dependências:
    ```
    npm install
    ```
- Inicie o projeto com cache limpo:
    ```
    npx expo start -c
    ```
- Escaneie o QR Code com o aplicativo Expo Go no celular.

## 🎯 Público-alvo
Funcionários de empresas que possuem assinatura de plano de saúde corporativo, incentivando hábitos saudáveis e oferecendo benefícios reais através da gamificação.

## 📹 Vídeo demonstrativo
Esse vídeo tem como responsabilidade demonstrar a navegação e funcionalidades do aplicativo. [Acesse aqui](https://youtu.be/nj-n01m26BE?si=kmSGD-6uenB8D6dj)

## 👥 Integrantes
- Carolina Machado, 552925;
- Felipe Nakama, 552821;
- Micael Azarias, 552699;
- Nathan Uflacker, 553264.
