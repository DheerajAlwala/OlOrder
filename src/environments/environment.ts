// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: true,
  firebase:{
    apiKey: "AIzaSyC4u9LFE_Htz1EZK4ybgkiSN2RJrJaYQAA",
    authDomain: "olorder-f8a5f.firebaseapp.com",
    databaseURL: "https://olorder-f8a5f-default-rtdb.firebaseio.com",
    projectId: "olorder-f8a5f",
    storageBucket: "olorder-f8a5f.appspot.com",
    messagingSenderId: "103370810500",
    appId: "1:103370810500:web:1fba38ad5c2eaedeeb0ed1",
    measurementId: "G-Z8XRE4N2EV"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
