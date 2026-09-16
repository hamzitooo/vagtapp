import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import VagtListeScreen from './screens/VagtListeScreen';
import { farver } from './styles/globalStyles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: farver.kort },
          headerTintColor: farver.tekst,
        }}
      >
        <Stack.Screen
          name="MineVagter"
          component={VagtListeScreen}
          options={{ title: 'Mine vagter' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}