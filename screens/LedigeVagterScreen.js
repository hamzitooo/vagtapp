// screens/LedigeVagterScreen.js
// NY SKÆRM I G2: Ledige vagter.
// Viser vagter, som kolleger har slået op. Før man kan tage en vagt, tjekker
// appen to ting, som kom frem i interviewene:
//  1) Har jeg de kvalifikationer, posten kræver? (fx alkoholbevis til bar)
//  2) Har jeg allerede en vagt samme dag? (dobbeltbooking på tværs af bureauer)

import { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, Alert } from 'react-native';
import {
  lytTilVagter,
  tagVagt,
  manglendeKvalifikationer,
  findVagtSammeDag,
} from '../services/vagtService';
import { bruger } from '../data/bruger';
import { globalStyles } from '../styles/globalStyles';

export default function LedigeVagterScreen() {
  const [alleVagter, setAlleVagter] = useState([]);

  useEffect(() => {
    const stopLytning = lytTilVagter(setAlleVagter);
    return stopLytning;
  }, []);

  // Kun vagter med status 'ledig' vises her
  const ledige = alleVagter.filter((v) => v.status === 'ledig');

  // Kaldes, når brugeren trykker "Tag vagten"
  function tryk(vagt) {
    const konflikt = findVagtSammeDag(vagt, alleVagter);

    if (konflikt) {
      // Advarsel om dobbeltbooking. Brugeren kan stadig vælge at tage den,
      // fx hvis tiderne ikke overlapper.
      Alert.alert(
        'Du har allerede en vagt den dag',
        `${konflikt.sted} (${konflikt.bureau}) kl. ${konflikt.tid}. Tjek at tiderne ikke overlapper.`,
        [
          { text: 'Annullér', style: 'cancel' },
          { text: 'Tag den alligevel', onPress: () => tagVagt(vagt.id) },
        ]
      );
    } else {
      tagVagt(vagt.id);
    }
  }

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={ledige}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={globalStyles.tomListe}>Der er ingen ledige vagter lige nu</Text>
        }
        renderItem={({ item }) => {
          const erMin = item.ejer === bruger.navn;
          const mangler = manglendeKvalifikationer(item, bruger.kvalifikationer);
          const kanTage = !erMin && mangler.length === 0;

          return (
            <View style={globalStyles.kort}>
              <Text style={globalStyles.bureauMærkat}>{item.bureau}</Text>
              <Text style={globalStyles.kortTitel}>{item.sted}</Text>
              <Text style={globalStyles.kortTekst}>
                {item.dato} · {item.tid}
              </Text>
              <Text style={globalStyles.kortTekst}>{item.post}</Text>

              {/* Forklar HVORFOR knappen er grå, i stedet for bare at skjule den */}
              {erMin && <Text style={globalStyles.status}>Din vagt – venter på en kollega</Text>}
              {!erMin && mangler.length > 0 && (
                <Text style={globalStyles.advarsel}>Kræver: {mangler.join(', ')}</Text>
              )}

              {!erMin && (
                <Pressable
                  style={[globalStyles.kortKnap, !kanTage && globalStyles.kortKnapDeaktiveret]}
                  disabled={!kanTage}
                  onPress={() => tryk(item)}
                >
                  <Text style={globalStyles.knapTekst}>Tag vagten</Text>
                </Pressable>
              )}
            </View>
          );
        }}
      />
    </View>
  );
}
