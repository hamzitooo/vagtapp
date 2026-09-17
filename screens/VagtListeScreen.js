// View og Text er React Native's grundlæggende byggeklodser:
// - View svarer nogenlunde til en <div> i webudvikling — en beholder man kan style og layoute.
// - Text bruges til AL tekst. I React Native kan man (modsat web) ikke bare
//   skrive tekst direkte inde i en View — den skal altid pakkes i en Text.
// - FlatList er en optimeret liste-komponent. I stedet for at rendere alle
//   elementer på én gang (som man ville med .map()), renderer FlatList kun de
//   elementer, der rent faktisk er synlige på skærmen ("virtualisering").
//   Det gør den langt hurtigere end en almindelig scroll-view med mange elementer.
import { View, Text, FlatList } from 'react-native';
import { vagter } from '../data/vagter';
import { globalStyles } from '../styles/globalStyles';

// VagtListeScreen er en "function component" — den modtager ingen props her,
// men i React Navigation ville den normalt også kunne modtage { navigation, route }
// som parameter, hvis vi skulle navigere videre til andre skærme.
export default function VagtListeScreen() {
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
          <View style={globalStyles.kort}>
            <Text style={globalStyles.kortTitel}>{item.sted}</Text>
            {/* {} lader os indsætte JavaScript-værdier midt i JSX-teksten.
                Her sætter vi dato og tid sammen med en lille skilletegn (·) imellem. */}
            <Text style={globalStyles.kortTekst}>
              {item.dato} · {item.tid}
            </Text>
            <Text style={globalStyles.kortTekst}>{item.post}</Text>
          </View>
        )}
      />
    </View>
  );
}