import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import PerfilScreen from '../screens/PerfilScreen';
import HabitosScreen from '../screens/HabitosScreen';
import RankingScreen from '../screens/RankingScreen';
import LojaScreen from '../screens/LojaScreen';
import styles from '../style/style';

type TabRouteName = 'Habitos' | 'Ranking' | 'Home' | 'Loja' | 'Perfil';
type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

const ICONS: Record<TabRouteName, IoniconsName> = {
  Home: 'home',
  Habitos: 'create',
  Ranking: 'podium',
  Loja: 'storefront',
  Perfil: 'person',
};

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home" // Iniciar na Home :)
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          const iconName = ICONS[route.name as TabRouteName] ?? 'home';
          return (
            <View style={focused ? styles.activeIconContainer : styles.iconContainer}>
              <Ionicons name={iconName} size={30} color="#fff" />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Habitos" component={HabitosScreen} />
      <Tab.Screen name="Ranking" component={RankingScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Loja" component={LojaScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}
