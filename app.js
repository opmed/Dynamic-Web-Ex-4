//Import Express
const express = require ("express");

//Initiate Express to app
const app = express();

//Set port - if env.port use that otherwise use 4000
const port = process.env.PORT || 4000;

//Require firebase
const firebase = require("firebase");

//Get configuration object so we can communicate with firebase
const firebaseConfig = {
  apiKey: "AIzaSyDuVWPAjPdYBhYDtjldAPKfF5b5Ef7DPtE",
  authDomain: "ex-4-f098f.firebaseapp.com",
  databaseURL: "https://ex-4-f098f.firebaseio.com",
  projectId: "ex-4-f098f",
  storageBucket: "ex-4-f098f.appspot.com",
  messagingSenderId: "966313840639",
  appId: "1:966313840639:web:b886d8bc6b60801ba161ca"
};

//Initialize firebase
firebase.InitializeApp(firebaseConfig)

//Initialize firestore
const db = firebase.firestore()

//Get blogposts
const blogposts = db
   .collection("blogposts")
   .get()
   .then(querySnapshot) => {
   	  querySnapshot.forEach((doc) => {
   	  console.log(`${doc.id} => ${doc.data()}`);
      });
   })

.catch(function(error) {
    console.log("Error:", error);
});


//create base route
app.get("/", (req, res) => res.send("DynamicWeb4"));

//Set up app so that it run when this file is run
app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);


/*rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2020, 5, 8);
    }
  }
}*/