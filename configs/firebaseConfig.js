import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyByNGagzsd85Tc6TjEsmfsXfJC5zOFlZfI',
  authDomain: 'emberhub-d0390.firebaseapp.com',
  databaseURL: 'https://emberhub-d0390.firebaseio.com',
  projectId: 'emberhub-d0390',
  storageBucket: 'emberhub-d0390.appspot.com',
  messagingSenderId: '884628574441',
  appId: '1:884628574441:web:f78a379cc5f58673656078',
  measurementId: 'G-4K33NQ4XY0'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
