importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
    apiKey: "AIzaSyA87n-STFY6fmtlofL0i7kR1Bfo7D6ceJM",
  authDomain: "prueba-6aa7f.firebaseapp.com",
  projectId: "prueba-6aa7f",
  storageBucket: "prueba-6aa7f.appspot.com",
  messagingSenderId: "1078578347930",
  appId: "1:1078578347930:web:6216a48814d3a02fc34423"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();