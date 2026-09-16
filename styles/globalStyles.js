import { StyleSheet } from 'react-native';

export const farver = {
  baggrund: '#121212',
  kort: '#1f1f1f',
  tekst: '#ffffff',
  dæmpet: '#9e9e9e',
  accent: '#ffb300',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: farver.baggrund,
    padding: 16,
  },
  kort: {
    backgroundColor: farver.kort,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  kortTitel: {
    color: farver.tekst,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  kortTekst: {
    color: farver.dæmpet,
    fontSize: 14,
  },
});