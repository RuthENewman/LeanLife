import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//
//   snapshot.forEach((expense) => {
//     expenses.push({
//       id: expense.key,
//       ...expense.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Groceries',
//   amount: 1245,
//   note: '',
//   createdAt: 43785234325984
// });

// database.ref('notes/-LlxPn8KvVgMdaVxulVX').remove();

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'GraphQL, PHP, Laravel, Node.JS'
// });

// database.ref().on('value', (snapshot) => {
//   const value = snapshot.val();
//   console.log(`${value.name} is a ${value.job.title} at ${value.job.company}.`);
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (error) => {
//   console.log('Error when fetching data', error);
// });
//
// setTimeout(() => {
//   database.ref('age').set(31);
// }, 3000);
//
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 6000);
//
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 9000);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('Oops, something went wrong when fetching data', error);
//   });

// database.ref().set({
//   name: 'Ruth Newman',
//   age: 30,
//   stressLevel: 9,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'London',
//     country: 'United Kingdom'
//   }
// }).then(() => {
//   console.log('Data saved to the database');
// }).catch((error) => {
//   console.log('Failed to save correctly: ', error);
// });

// database.ref('attributes').set(null);

// database.ref().update({
//   stressLevel: 6,
//   'location/city': 'Manchester',
//   'job/company': 'The Co-op'
// });

// database.ref('openToNewOpportunities').remove()
//   .then(() => {
//     console.log('Data removed from the database');
//   }).catch((error) => {
//     console.log('Unable to remove data from the database', error);
//   })
