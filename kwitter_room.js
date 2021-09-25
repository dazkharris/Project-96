const firebaseConfig = {
    apiKey: "AIzaSyB18w0s3CU-r1n5gXnoXZEsMZJvLfUFvvw",
    authDomain: "kwitter-3337f.firebaseapp.com",
    databaseURL: "https://kwitter-3337f-default-rtdb.firebaseio.com",
    projectId: "kwitter-3337f",
    storageBucket: "kwitter-3337f.appspot.com",
    messagingSenderId: "1049664871097",
    appId: "1:1049664871097:web:28f0053547bbc465a71968",
    measurementId: "G-6MHMGN70V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase
const app = initializeApp(firebaseConfig);



function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                //End code
          });
    });
}
getData();