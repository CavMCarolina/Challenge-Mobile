import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Home from '../components/Home';
import Perfil from '../components/Perfil.js';
import Habitos from '../components/Habitos.js';
import Ranking from '../components/Ranking.js';
import Loja from '../components/Loja.js';
import styles from '../style/style.js';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home" // Iniciar na Home :)
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,

        // ícones do expo
        tabBarIcon: ({ focused }) => {
          const iconName =
            route.name === 'Home' ? 'home' :
            route.name === 'Habitos' ? 'create' :
            route.name === 'Ranking' ? 'podium' :
            route.name === 'Loja' ? 'storefront' :
            'person';

          return (
            // Estilo bonitinho para quando a aba está selecionada :)
            <View style={focused ? styles.activeIconContainer : styles.iconContainer}>
              <Ionicons name={iconName} size={30} color='#fff'/>
            </View>
          );
        },
      })}
    >
      {/* ribbon */}
      <Tab.Screen name="Habitos" component={Habitos} />
      <Tab.Screen name="Ranking" component={Ranking} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Loja" component={Loja} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}