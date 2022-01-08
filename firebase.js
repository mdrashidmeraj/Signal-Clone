import * as firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDxMK5oc6j1sCgX0nucTf2TTz03eRCwCtw",
  authDomain: "signal-clone-b3a6e.firebaseapp.com",
  projectId: "signal-clone-b3a6e",
  storageBucket: "signal-clone-b3a6e.appspot.com",
  messagingSenderId: "351820518566",
  appId: "1:351820518566:web:ad9c3d37d3258a1b76d067"
};

let app;

// if app is not initialize only then initialize it....
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
