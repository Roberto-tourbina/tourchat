/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBihntBgQVKK4wZ3_o74kPZIR9qHQEC00k",
  authDomain: "tour-by-chat.firebaseapp.com",
  projectId: "tour-by-chat",
  storageBucket: "tour-by-chat.appspot.com",
  messagingSenderId: "785400042267",
  appId: "1:785400042267:web:fe0b9143b4bab0248c79be",
  measurementId: "G-C81XF4JQZ4"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}