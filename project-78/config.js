import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAWoj7PSKAZqhgQHjyHXclqsRp-4FRY0K4",
  authDomain: "bartar-system-app.firebaseapp.com",
  projectId: "bartar-system-app",
  storageBucket: "bartar-system-app.appspot.com",
  messagingSenderId: "850996026037",
  appId: "1:850996026037:web:aafbfcb316047ed3e27cfc"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
