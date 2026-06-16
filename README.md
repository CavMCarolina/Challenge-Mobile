# 📱 CareTrack

Aplicativo mobile para acompanhamento de hábitos saudáveis de funcionários de empresas com plano de saúde corporativo.  
O app incentiva o bem-estar através de gamificação, com pontos, ranking e loja de recompensas.

## 🚀 Funcionalidades

- **Home**
  - Indicação de artigos para o usuário ler
  - Conscientização de hábitos saudáveis
  - Pontuação explícita e redirecionamento para loja
  - Monitor de Saúde IoT em tempo real (frequência cardíaca, passos, temperatura, nível de atividade)

- **Cadastro de hábitos**  
  - Funcionário só pode adicionar hábito se tirar uma foto e escrever o nome 
  - Cada hábito vale 30 pontos 
  - Categorias: Atividade Física, Alimentação, Sono, Bem-estar  
  - Tratamento de permissão de câmera com mensagem de orientação em caso de recusa
  - Notificação push ao adicionar hábito com sucesso
  - Estado vazio com orientação ao usuário

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
- [Expo](https://expo.dev/) / [EAS Build](https://docs.expo.dev/build/introduction/)
- [TypeScript](https://www.typescriptlang.org/)
- [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/)
- [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/)
- [@react-navigation/native](https://reactnavigation.org/) 
- [@react-native-picker/picker](https://github.com/react-native-picker/picker)  
- [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)  
- [expo-notifications](https://docs.expo.dev/versions/latest/sdk/notifications/)
- [expo-google-fonts/montserrat](https://github.com/expo/google-fonts)  
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/)  

## 📡 Integração IoT e Tempo Real

O app se conecta via **Socket.IO** a um servidor Node.js que simula um sensor de saúde IoT. Os dados são emitidos a cada 3 segundos e exibidos em tempo real na tela Home.

### Dados do sensor simulado:

| Métrica             | Descrição                           |
| ------------------- | ----------------------------------- |
| Frequência Cardíaca | Batimentos por minuto (62–100 bpm)  |
| Passos              | Contador de passos diários          |
| Temperatura         | Temperatura corporal (36,1–37,3 °C) |
| Nível de Atividade  | Baixo / Moderado / Alto             |

### Como iniciar o servidor IoT:

```bash
cd server
npm install
npm start
```

O terminal exibirá o IP local da máquina — use-o no app para conectar.

## 🔔 Notificações Push

O app usa **`expo-notifications`** para:

- Solicitar permissão ao usuário na primeira abertura
- Tratar recusa com mensagem de orientação
- Agendar lembrete diário às **9h** para adicionar hábitos
- Enviar notificação imediata ao registrar um hábito com sucesso

> As notificações são locais (não requerem servidor de push). Funciona em Android e iOS.

> **Atenção:** a partir do Expo SDK 53, notificações **não funcionam no Expo Go** para Android. É necessário usar um **Development Build** via EAS Build (veja a seção de instalação abaixo).

## 🔒 Segurança

- Sessão do usuário armazenada com **`expo-secure-store`** (criptografia AES-256 no Android, Keychain no iOS)
- Dados de hábitos e pontos armazenados em `AsyncStorage` (não sensíveis)
- Nenhuma credencial de acesso exposta no código-fonte

## 📋 Permissões necessárias

| Permissão            | Uso                                  | Tratamento de recusa                         |
| -------------------- | ------------------------------------ | -------------------------------------------- |
| `CAMERA`             | Foto obrigatória ao registrar hábito | Alerta informativo com orientação            |
| `POST_NOTIFICATIONS` | Lembretes diários e confirmações     | Alerta informativo, app continua funcionando |

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
    │   ├── storage.ts
    │   ├── iotService.ts
    │   └── notificationService.ts
    ├── server/
    │   ├── package.json
    │   └── index.js
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
    ├── app.json
    ├── eas.json
    ├── metro.config.js
    ├── tsconfig.json
    └── package.json

## ⚙️ Instalação e execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- [EAS CLI](https://docs.expo.dev/build/introduction/): `npm install -g eas-cli`
- Conta gratuita em [expo.dev](https://expo.dev)

---

### Opção 1 — Development Build com EAS (recomendado)

> Use esta opção para ter todas as funcionalidades, incluindo notificações push.

**1. Clone e instale as dependências:**

```bash
git clone https://github.com/CavMCarolina/Challenge-Mobile.git
cd Challenge-Mobile
npm install
```

**2. Faça login na sua conta Expo:**

```bash
eas login
```

**3. Gere o build de desenvolvimento para Android:**

```bash
eas build --profile development --platform android --non-interactive
```

Um link para download do `.apk` será exibido no terminal.

**4. Instale o `.apk` no celular:**

Baixe o arquivo pelo link gerado e instale no Android.  
Se necessário, habilite **"Instalar apps de fontes desconhecidas"** em _Configurações > Segurança_.

**5. Inicie o servidor de desenvolvimento:**

```bash
npx expo start --dev-client -c
```

Escaneie o QR Code com o app instalado no celular.

---

### Opção 2 — Expo Go (funcionalidades limitadas)

> Notificações não funcionam no Expo Go para Android a partir do SDK 53.  
> Use apenas para testar navegação e outras funcionalidades.

```bash
git clone https://github.com/CavMCarolina/Challenge-Mobile.git
cd Challenge-Mobile
npm install
npx expo start -c
```

Escaneie o QR Code com o aplicativo **Expo Go** no celular.

---

### Servidor IoT (na mesma rede Wi-Fi):

```bash
cd server
npm install
npm start
```

> **Importante:** O celular e o computador precisam estar na **mesma rede Wi-Fi** para a conexão IoT funcionar.

### Acesso no Login

Para logar no aplicativo, colocamos um número apenas para demonstração. O "CPF" aceito é **1234567890**

## 🎯 Público-alvo

Funcionários de empresas que possuem assinatura de plano de saúde corporativo, incentivando hábitos saudáveis e oferecendo benefícios reais através da gamificação.

## 📹 Vídeo demonstrativo

 - [Sprint 3](https://youtu.be/nj-n01m26BE?si=kmSGD-6uenB8D6dj)
 - [Sprint 4](https://youtu.be/8mOGyQvu4x0?is=VRCYl5zV1oNKrOBQ)

## 🔗 Azure Boards

Link de acesso para correção dos testes manuais na matéria de QA. [Clique aqui!](https://dev.azure.com/RM552699/Sprint4_QA)

## 👥 Integrantes

- Carolina Machado, 552925;
- Felipe Nakama, 552821;
- Micael Azarias, 552699;
- Nathan Uflacker, 553264.
