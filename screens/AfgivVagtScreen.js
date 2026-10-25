// screens/AfgivVagtScreen.js
// G1: knappen ændrede kun en lokal state, og intet blev gemt.
// G2: knappen gemmer i Firebase, at vagten er ledig, så kolleger kan se den
// under "Ledige vagter". Vagtlederen skal godkende, før den skifter ejer.

import { useState } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { afgivVagt } from '../services/vagtService';
import { globalStyles } from '../styles/globalStyles';

export default function AfgivVagtScreen({ route, navigation }) {
  const { vagt } = route.params;
  const [afgivet, setAfgivet] = useState(false);

  // async/await: vi venter på, at databasen har gemt, før vi viser kvitteringen
  async function bekræft() {
    try {
      await afgivVagt(vagt.id);
      setAfgivet(true);
    } catch (fejl) {
      Alert.alert('Noget gik galt', 'Vagten blev ikke slået op. Prøv igen.');
    }
  }

  if (afgivet) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.overskrift}>Vagten er slået op</Text>
        <Text style={globalStyles.besked}>
          {vagt.post} på {vagt.sted} {vagt.dato} er nu synlig for dine kolleger
          under "Ledige vagter". Når en kollega tager den, skal din
          vagtleder godkende byttet. Indtil da er vagten stadig din.
        </Text>
        <Pressable style={globalStyles.knap} onPress={() => navigation.popToTop()}>
          <Text style={globalStyles.knapTekst}>Tilbage til mine vagter</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.overskrift}>Afgiv vagt</Text>
      <Text style={globalStyles.besked}>
        Du er ved at afgive {vagt.post} på {vagt.sted} {vagt.dato} kl. {vagt.tid}.
        Vagten bliver slået op, så en kollega kan overtage den.
      </Text>
      <Pressable style={globalStyles.knap} onPress={bekræft}>
        <Text style={globalStyles.knapTekst}>Bekræft og slå vagten op</Text>
      </Pressable>
    </View>
  );
}
