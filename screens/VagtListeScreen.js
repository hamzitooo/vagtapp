// screens/VagtListeScreen.js
// "Mine vagter": alle mine vagter samlet ét sted – også på tværs af bureauer.
// G1: vagterne kom fra en hårdkodet fil.
// G2: vagterne hentes fra Firebase og opdateres automatisk ved ændringer.

import { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { lytTilVagter } from '../services/vagtService';
import { bruger } from '../data/bruger';
import { globalStyles } from '../styles/globalStyles';

// Oversætter status til en tekst, brugeren forstår
function statusTekst(status) {
  if (status === 'ledig') return 'Slået op – venter på en kollega';
  if (status === 'afventer') return 'En kollega har taget den – venter på vagtleder';
  return '';
}

export default function VagtListeScreen({ navigation }) {
  const [vagter, setVagter] = useState([]);

  // useEffect kører, når skærmen åbner. Vi begynder at lytte på databasen,
  // og return-funktionen stopper lytningen igen, når skærmen lukkes.
  useEffect(() => {
    const stopLytning = lytTilVagter((alle) => {
      // Vis kun de vagter, jeg ejer
      setVagter(alle.filter((v) => v.ejer === bruger.navn));
    });
    return stopLytning;
  }, []);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={vagter}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={globalStyles.tomListe}>Du har ingen vagter</Text>}
        renderItem={({ item }) => (
          <Pressable
            style={globalStyles.kort}
            onPress={() => navigation.navigate('VagtDetaljer', { vagt: item })}
          >
            <Text style={globalStyles.bureauMærkat}>{item.bureau}</Text>
            <Text style={globalStyles.kortTitel}>{item.sted}</Text>
            <Text style={globalStyles.kortTekst}>
              {item.dato} · {item.tid}
            </Text>
            <Text style={globalStyles.kortTekst}>{item.post}</Text>
            {item.status !== 'aktiv' && (
              <Text style={globalStyles.status}>{statusTekst(item.status)}</Text>
            )}
          </Pressable>
        )}
      />
    </View>
  );
}
