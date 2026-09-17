// index.js er app'ens ENTRY POINT — det første, der køres, når appen starter.
// Expo kigger automatisk efter denne fil (konfigureret via "main" i package.json).
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
//
// Kort forklaret: I almindelig React Native skal man selv kalde
// AppRegistry.registerComponent(). Expo's registerRootComponent gør det for os
// og sørger for, at det virker ens uanset om appen køres i Expo Go (test-appen
// på telefonen) eller som en "rigtig" bygget app (native build).
registerRootComponent(App);
