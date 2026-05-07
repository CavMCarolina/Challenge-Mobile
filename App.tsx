import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { AppProvider } from './context/AppContext';
import LoginScreen from './screens/LoginScreen';
import TabNavigator from './navigation/TabNavigation';
import WebViewScreen from './navigation/WebViewScreen';
import { RootStackParamList } from './types';
import { CORES } from './style/style';

// Navegação Stack
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  // Carrega as fontes
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  // Enquanto a fonte não carrega, retorna null ou um splash
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={CORES.primaria} />
      </View>
    );
  }

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="App"
            // Ao entrar, redireciona para a navegação Tab
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WebViewScreen"
            component={WebViewScreen}
            options={{ title: 'Artigo' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
