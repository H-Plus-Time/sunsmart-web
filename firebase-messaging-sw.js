var window = self;

importScripts(
  '../bower_components/firebase/firebase-app.js',
  '../bower_components/firebase/firebase-messaging.js'
);

firebase.initializeApp({
  messagingSenderId: '97269898080'
});

const messaging = firebase.messaging();
