import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyAZWhC1d6jtyTsrj7onL_mxCoMJVHjUY8s",
  authDomain: "kroger-data-analysis.firebaseapp.com",
  projectId: "kroger-data-analysis",
  storageBucket: "kroger-data-analysis.appspot.com",
  messagingSenderId: "1069583262602",
  appId: "1:1069583262602:web:e639457ce7fceef3afde73",
  measurementId: "G-46NHF46MWY",
  databaseUrl: "https://kroger-data-analysis-default-rtdb.firebaseio.com/"
};
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;