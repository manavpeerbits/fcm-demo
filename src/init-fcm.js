import * as firebase from "firebase/app";
import "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyBNJqyNjvNzIxr27-amqBcE3Yaae4zQ8iw",
  authDomain: "testing-demo-a44ca.firebaseapp.com",
  databaseURL: "https://testing-demo-a44ca.firebaseio.com",
  projectId: "testing-demo-a44ca",
  storageBucket: "testing-demo-a44ca.appspot.com",
  messagingSenderId: "486874032844",
  appId: "1:486874032844:web:eb1409f3e7f410f31ef069",
  measurementId: "G-X89LH5HJ8Z",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging.isSupported()
  ? firebase.messaging()
  : null;

export { messaging };
