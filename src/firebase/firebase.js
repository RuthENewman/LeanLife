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

const database = firebase.database();

database.ref().set({
  name: 'Ruth Newman',
  age: 30,
  openToNewOpportunities: true,
  location: {
    city: 'London',
    country: 'United Kingdom'
  }
});

database.ref('location/city').set('Manchester');
database.ref('attributes').set({
  height: '5ft 6in',
  shoeSize: 6,
});
