// App.js
// G1: én stack-navigation med tre skærme.
// G2: tab-navigation i bunden med tre faner. Fanen "Mine vagter" indeholder
// stadig stacken fra G1 (liste → detaljer → afgiv), så den virker som før.

import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import VagtListeScreen from './screens/VagtListeScreen';
import VagtDetaljerScreen from './screens/VagtDetaljerScreen';
import AfgivVagtScreen from './screens/AfgivVagtScreen';
import LedigeVagterScreen from './screens/LedigeVagterScreen';
import GodkendScreen from './screens/GodkendScreen';
import { opretStartdataHvisTom } from './services/vagtService';
import { farver } from './styles/globalStyles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Fælles udseende for alle headers
const headerUdseende = {
  headerStyle: { backgroundColor: farver.kort },
  headerTintColor: farver.tekst,
};

// Stacken fra G1 – nu pakket ind i sin egen komponent, så den kan ligge i en fane
function MineVagterStack() {
  return (
    <Stack.Navigator screenOptions={headerUdseende}>
      <Stack.Screen
        name="MineVagter"
        component={VagtListeScreen}
        options={{ title: 'Mine vagter' }}
      />
      <Stack.Screen
        name="VagtDetaljer"
        component={VagtDetaljerScreen}
        options={{ title: 'Vagtdetaljer' }}
      />
      <Stack.Screen
        name="AfgivVagt"
        component={AfgivVagtScreen}
        options={{ title: 'Afgiv vagt' }}
      />
    </Stack.Navigator>
  );
}

// Fanen "Ledige vagter" har også sin egen stack, så man kan trykke sig ind
// på en ledig vagt. Vi genbruger VagtDetaljerScreen fra "Mine vagter".
function LedigeStack() {
  return (
    <Stack.Navigator screenOptions={headerUdseende}>
      <Stack.Screen
        name="LedigeVagter"
        component={LedigeVagterScreen}
        options={{ title: 'Ledige vagter' }}
      />
      <Stack.Screen
        name="VagtDetaljer"
        component={VagtDetaljerScreen}
        options={{ title: 'Vagtdetaljer' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  // Første gang appen åbner, lægges startdata op i Firebase (kun hvis tom)
  useEffect(() => {
    opretStartdataHvisTom();
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            ...headerUdseende,
            tabBarStyle: { backgroundColor: farver.kort, borderTopColor: farver.kort },
            tabBarActiveTintColor: farver.accent,
            tabBarInactiveTintColor: farver.dæmpet,
          }}
        >
          <Tab.Screen
            name="MineVagterTab"
            component={MineVagterStack}
            options={{
              title: 'Mine vagter',
              headerShown: false, // stacken har sin egen header
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="calendar-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Ledige"
            component={LedigeStack}
            options={{
              title: 'Ledige vagter',
              headerShown: false, // stacken har sin egen header
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="swap-horizontal-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Godkend"
            component={GodkendScreen}
            options={{
              title: 'Godkend (vagtleder)',
              tabBarLabel: 'Godkend',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="checkmark-done-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
