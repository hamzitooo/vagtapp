// screens/VagtDetaljerScreen.js
// Detaljer om én vagt. Nyt i G2: bureau og krav til posten vises,
// og "Afgiv vagt"-knappen vises kun, hvis vagten ikke allerede er slået op.

import { View, Text, Pressable } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function VagtDetaljerScreen({ route, navigation }) {
  const { vagt } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.bureauMærkat}>{vagt.bureau}</Text>
      <Text style={globalStyles.overskrift}>{vagt.sted}</Text>

      <Text style={globalStyles.label}>Post</Text>
      <Text style={globalStyles.værdi}>{vagt.post}</Text>

      <Text style={globalStyles.label}>Dato</Text>
      <Text style={globalStyles.værdi}>{vagt.dato}</Text>

      <Text style={globalStyles.label}>Tidsrum</Text>
      <Text style={globalStyles.værdi}>{vagt.tid}</Text>

      <Text style={globalStyles.label}>Vagtleder</Text>
      <Text style={globalStyles.værdi}>{vagt.kontakt}</Text>

      <Text style={globalStyles.label}>Krav til posten</Text>
      <Text style={globalStyles.værdi}>{(vagt.kræver || []).join(', ')}</Text>

      {vagt.status === 'aktiv' && (
        <Pressable
          style={globalStyles.knap}
          onPress={() => navigation.navigate('AfgivVagt', { vagt })}
        >
          <Text style={globalStyles.knapTekst}>Afgiv vagt</Text>
        </Pressable>
      )}
    </View>
  );
}
