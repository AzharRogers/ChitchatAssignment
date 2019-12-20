import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDw2W0xt0YZVWhoqLfWV9Y-HLRVV7mTdPE",
    authDomain: "chatwebassignment.firebaseapp.com",
    databaseURL: "https://chatwebassignment.firebaseio.com",
    projectId: "chatwebassignment",
    storageBucket: "chatwebassignment.appspot.com",
    messagingSenderId: "576383757734",
    appId: "1:576383757734:web:41a3ddd86169e80c197367",
    measurementId: "G-Q8PZGECXME"
}
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.6.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDw2W0xt0YZVWhoqLfWV9Y-HLRVV7mTdPE",
//     authDomain: "chatwebassignment.firebaseapp.com",
//     databaseURL: "https://chatwebassignment.firebaseio.com",
//     projectId: "chatwebassignment",
//     storageBucket: "chatwebassignment.appspot.com",
//     messagingSenderId: "576383757734",
//     appId: "1:576383757734:web:41a3ddd86169e80c197367",
//     measurementId: "G-Q8PZGECXME"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>