// NavigationContainer holder styr på hele app'ens navigations-tilstand
// (hvilken skærm man er på, historik osv.). Den skal altid ligge yderst,
// og der må kun være ÉN i hele app'en.
import VagtDetaljerScreen from "./screens/VagtDetaljerScreen";
import AfgivVagtScreen from "./screens/AfgivVagtScreen";
import { NavigationContainer } from "@react-navigation/native";
// createNativeStackNavigator opretter en "stak" af skærme, ligesom en bunke
// kort — nye skærme lægges ovenpå, og "tilbage" fjerner det øverste kort igen.
// Den bruger native navigations-animationer (samme følelse som en rigtig iOS/Android-app).
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import VagtListeScreen from "./screens/VagtListeScreen";
import { farver } from "./styles/globalStyles";

// Stack er selve navigatoren. Vi kalder den én gang og bruger den til at
// definere hvilke skærme app'en har via <Stack.Navigator> og <Stack.Screen>.
const Stack = createNativeStackNavigator();

// App er ROD-komponenten (root component) — den component alle andre
// komponenter i app'en ligger inde i. Det er en "function component":
// en almindelig JavaScript-funktion, der returnerer JSX (markup, der ligner HTML,
// men som faktisk er JavaScript under motorhjelmen).
export default function App() {
  return (
    <NavigationContainer>
      {/* StatusBar styrer udseendet af telefonens statuslinje (klokkeslæt, batteri osv.)
          øverst på skærmen. style="light" gør ikonerne hvide, så de kan ses
          på vores mørke baggrund. */}
      <StatusBar style="light" />
      <Stack.Navigator
        // screenOptions sætter standard-udseende for ALLE skærme i denne navigator,
        // så vi ikke skal style headeren på hver enkelt skærm for sig.
        screenOptions={{
          headerStyle: { backgroundColor: farver.kort },
          headerTintColor: farver.tekst,
        }}
      >
        {/* Hver Stack.Screen er én "side" i app'en.
            - name: det interne navn navigatoren bruger til at referere til skærmen
            - component: hvilken React-komponent der skal vises
            - options: skærm-specifikke indstillinger, her titlen i headeren */}
        <Stack.Screen
          name="MineVagter"
          component={VagtListeScreen}
          options={{ title: "Mine vagter" }}
        />
        <Stack.Screen
          name="VagtDetaljer"
          component={VagtDetaljerScreen}
          options={{ title: "Vagtdetaljer" }}
        />
        <Stack.Screen
          name="AfgivVagt"
          component={AfgivVagtScreen}
          options={{ title: "Afgiv vagt" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
