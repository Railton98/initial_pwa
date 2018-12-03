importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-messaging  .js');

firebase.initializeApp({
    'messagingSenderId': "122758481160"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
    console.log('Received background message ', payload);
    return self.registration.showNotification({}, {})
});
