import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyCZWwOrJrXO2tsbGIWJXlRuUgh69XtwN08",
  authDomain: "gerenciamento-3417b.firebaseapp.com",
  projectId: "gerenciamento-3417b",
  storageBucket: "gerenciamento-3417b.appspot.com",
  messagingSenderId: "89980104683",
  appId: "1:89980104683:web:cf6c9d2c7b324d425e73ae",
  measurementId: "G-WFLRM8K60R"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;