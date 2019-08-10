import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBExILyWdlRUP_evIJgfKzSVyx3pnHd0jQ",
    authDomain: "lean-life-app.firebaseapp.com",
    databaseURL: "https://lean-life-app.firebaseio.com",
    projectId: "lean-life-app",
    storageBucket: "lean-life-app.appspot.com",
    messagingSenderId: "690201243619",
    appId: "1:690201243619:web:dae23286b9563e0f"
  };

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
  name: 'Ruth Newman'
});
