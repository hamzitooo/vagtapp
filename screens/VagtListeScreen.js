// View og Text er React Native's grundlæggende byggeklodser:
// - View svarer nogenlunde til en <div> i webudvikling — en beholder man kan style og layoute.
// - Text bruges til AL tekst. I React Native kan man (modsat web) ikke bare
//   skrive tekst direkte inde i en View — den skal altid pakkes i en Text.
// - FlatList er en optimeret liste-komponent. I stedet for at rendere alle
//   elementer på én gang (som man ville med .map()), renderer FlatList kun de
//   elementer, der rent faktisk er synlige på skærmen ("virtualisering").
//   Det gør den langt hurtigere end en almindelig scroll-view med mange elementer.
// - Pressable er React Natives generelle "tryk-på-mig"-komponent. Den fungerer
//   som en View, men kan reagere på berøring via fx onPress.
import { View, Text, FlatList, Pressable } from 'react-native';
import { vagter } from '../data/vagter';
import { globalStyles } from '../styles/globalStyles';

// VagtListeScreen modtager nu "navigation" som prop. Det sker automatisk:
// når en komponent er registreret som en Stack.Screen (se App.js), sender
// React Navigation altid et "navigation"-objekt med ind som prop, som man kan
// bruge til at skifte skærm — fx navigation.navigate('SkærmNavn').
// { navigation } her er destructuring af props-objektet, samme mønster som
// { item } bruges nedenfor i renderItem.
export default function VagtListeScreen({ navigation }) {
  return (
    // Selve skærmens container. globalStyles.container giver den fx
    // baggrundsfarve og padding — se styles/globalStyles.js.
    <View style={globalStyles.container}>
      <FlatList
        // data: selve arrayet af vagter, som listen skal vise.
        data={vagter}
        // keyExtractor fortæller React, hvordan hvert element identificeres unikt.
        // Det bruges internt til at holde styr på elementer effektivt, fx hvis
        // listen senere skal sortere, tilføje eller fjerne vagter.
        keyExtractor={(item) => item.id}
        // renderItem bliver kaldt af FlatList én gang for hvert element i data.
        // Den modtager et objekt, hvorfra vi "destrukturerer" (plukker ud) feltet
        // "item" — altså den enkelte vagt. Funktionen returnerer den JSX,
        // der skal vises for netop dén vagt.
        renderItem={({ item }) => (
          // Kortet er nu en Pressable i stedet for en View, så hele kortet
          // kan trykkes på. onPress kaldes, når brugeren trykker, og navigerer
          // videre til 'VagtDetaljer'-skærmen.
          // Det andet argument til navigate() er route-params — data, der
          // sendes med til den nye skærm. Her sender vi hele vagt-objektet
          // (item) med, så VagtDetaljer kan vise detaljer uden at skulle
          // slå vagten op igen.
          <Pressable
            style={globalStyles.kort}
            onPress={() => navigation.navigate('VagtDetaljer', { vagt: item })}
          >
            <Text style={globalStyles.kortTitel}>{item.sted}</Text>
            {/* {} lader os indsætte JavaScript-værdier midt i JSX-teksten.
                Her sætter vi dato og tid sammen med en lille skilletegn (·) imellem. */}
            <Text style={globalStyles.kortTekst}>
              {item.dato} · {item.tid}
            </Text>
            <Text style={globalStyles.kortTekst}>{item.post}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}