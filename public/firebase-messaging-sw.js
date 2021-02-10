importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

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
const messaging = firebase.messaging();

// Receives Only Data Messages from Firebase
messaging.setBackgroundMessageHandler(function (payload) {
  console.log(" Received background message ", payload);

  const upperCasedTitle = String(payload.data.title).toUpperCase();
  const filteredTitle = upperCasedTitle.replaceAll("_", " ");

  // Customize notification here
  var notificationTitle = filteredTitle;
  var notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon,
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

// [END background_handler]
self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  console.log("Notification Closed");
  //handle click event onClick on Web Push Notification
});
