// screens/GodkendScreen.js
// NY SKÆRM I G2: Vagtlederens godkendelse.
// I G1-interviewene kom det frem, at et bytte altid skal godkendes af
// vagtlederen, fordi kollegaen skal have vagtkort og må stå på posten.
// Her ser vagtlederen alle bytter, der venter, med kollegaens kvalifikationer
// tjekket op mod postens krav, og kan godkende eller afvise med ét tryk.
// (I en rigtig version ville kun vagtledere have adgang til denne skærm.)

import { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import {
  lytTilVagter,
  godkendBytte,
  afvisBytte,
  manglendeKvalifikationer,
} from '../services/vagtService';
import { globalStyles } from '../styles/globalStyles';

export default function GodkendScreen() {
  const [afventer, setAfventer] = useState([]);

  useEffect(() => {
    const stopLytning = lytTilVagter((alle) => {
      setAfventer(alle.filter((v) => v.status === 'afventer'));
    });
    return stopLytning;
  }, []);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={afventer}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={globalStyles.tomListe}>Ingen bytter venter på godkendelse</Text>
        }
        renderItem={({ item }) => {
          const mangler = manglendeKvalifikationer(item, item.overtagerKvalifikationer);

          return (
            <View style={globalStyles.kort}>
              <Text style={globalStyles.bureauMærkat}>{item.bureau}</Text>
              <Text style={globalStyles.kortTitel}>
                {item.ejer} → {item.overtager}
              </Text>
              <Text style={globalStyles.kortTekst}>
                {item.sted} · {item.dato} · {item.tid}
              </Text>
              <Text style={globalStyles.kortTekst}>{item.post}</Text>

              {/* Kvalifikationstjek: det vagtlederen før skulle slå op manuelt */}
              {mangler.length === 0 ? (
                <Text style={globalStyles.ok}>
                  ✓ Opfylder krav: {(item.kræver || []).join(', ')}
                </Text>
              ) : (
                <Text style={globalStyles.advarsel}>✗ Mangler: {mangler.join(', ')}</Text>
              )}

              <View style={globalStyles.knapRække}>
                <Pressable style={globalStyles.afvisKnap} onPress={() => afvisBytte(item)}>
                  <Text style={globalStyles.knapTekst}>Afvis</Text>
                </Pressable>
                <Pressable style={globalStyles.godkendKnap} onPress={() => godkendBytte(item)}>
                  <Text style={globalStyles.knapTekst}>Godkend</Text>
                </Pressable>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
