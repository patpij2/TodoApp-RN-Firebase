import firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgz1XPXT4_pv4l53s837wJaHqKW96XcyQ",
  authDomain: "todo-app-pp.firebaseapp.com",
  databaseURL: "https://todo-app-pp.firebaseio.com",
  projectId: "todo-app-pp",
  storageBucket: "todo-app-pp.appspot.com",
  messagingSenderId: "903849115286",
  appId: "1:903849115286:web:0278493d2faf2802780cb7",
};

class Fire {
  constructor(callback) {
    this.init(callback);
  }

  init(callback) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      completed;
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        callback(null, user);
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {
            callback(error);
          });
      }
    });
  }

  getLists(callback) {
    let ref = firebase
      .firestore()
      .collection("users")
      .doc(this.userId)
      .collection("lists");

    this.unsubscribe = ref.onSnapshot(snapshot => {
        lists = []

        snapshot.forEach(doc => {
            lists.push({id: doc.id, ...doc.data() })
        });

        callback(lists);y
    })
  }

  get usetId() {
    return firebase.auth().currentUser.uid;
  }
}

export default Fire;
