import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function AfgivVagtScreen({ route, navigation }) {
  const { vagt } = route.params;
  const [afgivet, setAfgivet] = useState(false);

  if (afgivet) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.overskrift}>Vagten er slået op</Text>
        <Text style={globalStyles.besked}>
          {vagt.post} på {vagt.sted} {vagt.dato} er nu synlig for dine kolleger.
          Du får besked, når en anden tager den.
        </Text>
        <Pressable
          style={globalStyles.knap}
          onPress={() => navigation.popToTop()}
        >
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
      <Pressable style={globalStyles.knap} onPress={() => setAfgivet(true)}>
        <Text style={globalStyles.knapTekst}>Bekræft og slå vagten op</Text>
      </Pressable>
    </View>
  );
}