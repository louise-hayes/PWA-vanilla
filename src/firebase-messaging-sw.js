importScripts("https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js");

var config = {
    apiKey: "AIzaSyBXTvxHtU6xy938kX4HGSVGuDsE3cSUcUY",
    authDomain: "pwa-vanilla.firebaseapp.com",
    databaseURL: "https://pwa-vanilla.firebaseio.com",
    projectId: "pwa-vanilla",
    storageBucket: "pwa-vanilla.appspot.com",
    messagingSenderId: "1065123917893"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    const title = "Hello World";
    const options = {
        body: payload.data.body
    };
    return self.registration.showNotification(title, options);
});