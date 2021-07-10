import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDA4XmYiZ5MjT-8JTunfv4UIC5ebAhigeg",
  authDomain: "authenticationproject-e9ca4.firebaseapp.com",
  projectId: "authenticationproject-e9ca4",
  storageBucket: "authenticationproject-e9ca4.appspot.com",
  messagingSenderId: "553933092660",
  appId: "1:553933092660:web:449602d4b6e5b664701761"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
