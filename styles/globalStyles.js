// styles/globalStyles.js
// Al styling for appen samlet ét sted. Farverne står øverst, så en
// farveændring kun skal laves ét sted.

import { StyleSheet } from 'react-native';

export const farver = {
  baggrund: '#121212',
  kort: '#1f1f1f',
  tekst: '#ffffff',
  dæmpet: '#9e9e9e',
  accent: '#ffb300',
  grøn: '#4caf50',
  rød: '#e57373',
};

export const globalStyles = StyleSheet.create({
  // --- Fra G1 ---
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
  overskrift: {
    color: farver.tekst,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  label: {
    color: farver.dæmpet,
    fontSize: 13,
    marginTop: 12,
  },
  værdi: {
    color: farver.tekst,
    fontSize: 16,
  },
  besked: {
    color: farver.tekst,
    fontSize: 16,
    lineHeight: 24,
  },
  knap: {
    backgroundColor: farver.accent,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  knapTekst: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },

  // --- Nyt i G2 ---
  // Lille mærkat med bureauets navn, så man kan se vagter fra flere bureauer
  bureauMærkat: {
    color: farver.accent,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  // Statuslinje på kortet ("Slået op", "Afventer vagtleder")
  status: {
    color: farver.accent,
    fontSize: 13,
    marginTop: 8,
  },
  // Rød tekst, når man mangler en kvalifikation
  advarsel: {
    color: farver.rød,
    fontSize: 13,
    marginTop: 8,
  },
  ok: {
    color: farver.grøn,
    fontSize: 13,
    marginTop: 8,
  },
  // Mindre knap inde i et kort
  kortKnap: {
    backgroundColor: farver.accent,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  // Gråt udseende, når knappen ikke kan bruges
  kortKnapDeaktiveret: {
    backgroundColor: '#3a3a3a',
  },
  // To knapper ved siden af hinanden (Godkend / Afvis)
  knapRække: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },
  godkendKnap: {
    flex: 1,
    backgroundColor: farver.grøn,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  afvisKnap: {
    flex: 1,
    backgroundColor: farver.rød,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  tomListe: {
    color: farver.dæmpet,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 40,
  },
});
