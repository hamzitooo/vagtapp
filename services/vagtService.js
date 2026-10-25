// services/vagtService.js
// Al kommunikation med databasen er samlet her, så skærmene ikke selv
// skal vide, hvordan Firebase virker. Skærmene kalder bare fx afgivVagt(id).

import { ref, onValue, get, set, update } from 'firebase/database';
import { db } from '../firebase';
import { vagter as startdata } from '../data/vagter';
import { bruger } from '../data/bruger';

// Lægger startdata op i databasen, men kun hvis den er tom.
// Så overskriver vi ikke ændringer, brugeren allerede har lavet.
export async function opretStartdataHvisTom() {
  const snapshot = await get(ref(db, 'vagter'));
  if (!snapshot.exists()) {
    // Firebase gemmer objekter, ikke lister, så vi bruger id som nøgle:
    // { v1: {...}, v2: {...} }
    const objekt = {};
    startdata.forEach((vagt) => {
      objekt[vagt.id] = vagt;
    });
    await set(ref(db, 'vagter'), objekt);
  }
}

// Lytter på alle vagter. onValue kalder callback hver gang noget ændrer sig
// i databasen – også når en anden telefon ændrer det. Funktionen returnerer
// en "stop med at lytte"-funktion, som skærmen kalder, når den lukkes.
export function lytTilVagter(callback) {
  return onValue(ref(db, 'vagter'), (snapshot) => {
    const data = snapshot.val();
    // Lav objektet om til en liste, som FlatList kan vise
    callback(data ? Object.values(data) : []);
  });
}

// Trin 1: Vagten slår sin vagt op som ledig
export function afgivVagt(id) {
  return update(ref(db, `vagter/${id}`), { status: 'ledig' });
}

// Trin 2: En kollega tager den ledige vagt. Den går ikke direkte over til
// kollegaen – den venter på vagtlederens godkendelse (status 'afventer').
// Kollegaens kvalifikationer sendes med, så vagtlederen kan se dem.
export function tagVagt(id) {
  return update(ref(db, `vagter/${id}`), {
    status: 'afventer',
    overtager: bruger.navn,
    overtagerKvalifikationer: bruger.kvalifikationer,
  });
}

// Trin 3a: Vagtlederen godkender. Kollegaen bliver ny ejer af vagten.
export function godkendBytte(vagt) {
  return update(ref(db, `vagter/${vagt.id}`), {
    ejer: vagt.overtager,
    status: 'aktiv',
    overtager: '',
    overtagerKvalifikationer: [],
  });
}

// Trin 3b: Vagtlederen afviser. Vagten bliver ledig igen.
export function afvisBytte(vagt) {
  return update(ref(db, `vagter/${vagt.id}`), {
    status: 'ledig',
    overtager: '',
    overtagerKvalifikationer: [],
  });
}

// Finder de kvalifikationer, en person mangler for at stå på en post.
// Fx kræver en barvagt 'Alkoholbevis'. Tom liste = personen må godt.
export function manglendeKvalifikationer(vagt, kvalifikationer) {
  const krav = vagt.kræver || [];
  const har = kvalifikationer || [];
  return krav.filter((k) => !har.includes(k));
}

// Finder en vagt, jeg allerede har (eller venter på), samme dag som den,
// jeg vil tage. Bruges til at advare mod dobbeltbooking – også på tværs af
// bureauer. Returnerer undefined, hvis der ikke er nogen.
export function findVagtSammeDag(vagt, alleVagter) {
  return alleVagter.find((v) => {
    const erMin = v.ejer === bruger.navn && v.status !== 'ledig';
    const venterPåMig = v.overtager === bruger.navn;
    return v.id !== vagt.id && v.dag === vagt.dag && (erMin || venterPåMig);
  });
}
