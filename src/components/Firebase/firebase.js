import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyD9V4U-mhGoA0lgoEHU6eTGq_GE9fYTEeI",
  authDomain: "react-firebase-authentic-2ab88.firebaseapp.com",
  databaseURL: "https://react-firebase-authentic-2ab88.firebaseio.com",
  projectId: "react-firebase-authentic-2ab88",
  storageBucket: "react-firebase-authentic-2ab88.appspot.com",
  messagingSenderId: "970977508728"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => 
    this.auth.signOut();

  doPasswordReset = email =>
    this.auth.sendPasswordResetEmail(email);
  
  doPasswordUpdate = password => 
    this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;