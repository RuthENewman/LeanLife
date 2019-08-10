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
  stressLevel: 9,
  job: {
    title: 'Software Developer',
    company: 'Google'
  },
  location: {
    city: 'London',
    country: 'United Kingdom'
  }
}).then(() => {
  console.log('Data saved to the database');
}).catch((error) => {
  console.log('Failed to save correctly: ', error);
});

// database.ref('attributes').set(null);

database.ref().update({
  stressLevel: 6,
  'location/city': 'Manchester',
  'job/company': 'The Co-op'
});

// database.ref('openToNewOpportunities').remove()
//   .then(() => {
//     console.log('Data removed from the database');
//   }).catch((error) => {
//     console.log('Unable to remove data from the database', error);
//   })
