import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Home from '../components/Home';
import Perfil from '../components/Perfil.js';
import Exercicios from '../components/Exercicios.js';
import Cursos from '../components/Cursos.js';
import Loja from '../components/Loja.js';
import styles from '../style/style.js';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,

        // ícones do expo
        tabBarIcon: ({ focused }) => {
          const iconName =
            route.name === 'Trilhas' ? 'home' :
            route.name === 'Treine' ? 'barbell' :
            route.name === 'Meus Cursos' ? 'school' :
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
      <Tab.Screen name="Treine" component={Exercicios} />
      <Tab.Screen name="Meus Cursos" component={Cursos} />
      <Tab.Screen name="Trilhas" component={Home} />
      <Tab.Screen name="Loja" component={Loja} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}