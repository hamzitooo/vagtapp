import { View, Text, FlatList } from 'react-native';
import { vagter } from '../data/vagter';
import { globalStyles } from '../styles/globalStyles';

export default function VagtListeScreen() {
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={vagter}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={globalStyles.kort}>
            <Text style={globalStyles.kortTitel}>{item.sted}</Text>
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