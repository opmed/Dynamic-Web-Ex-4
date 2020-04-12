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
firebase.InitializeApp(firebaseConfig);


//Initialize firestore
const db = firebase.firestore();


//Create empty array
const blogpostsArray = [];


//Reference to collections
const blogposts = db.collection("blogposts)";


//Get blogposts
const allBlogPosts = db
   .collection("blogposts")
   .get()
   .then(querySnapshot) => {
   	  querySnapshot.forEach((doc) => {
   	  console.log(`${doc.id} => ${doc.data()}`);
   	  //push document into array everytime the query loops over existing article
   	  blogpostsArray.push(doc.data());
      });
   })

.catch(function(error) {
    console.log("Error:", error);
});


//Get single blogpost
const documentToGet = "sample-post";
const singleBlogPost = blogposts;
.doc(documentToGet)
.get()
.then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
})
.catch(function(error) {
    console.log("Error:", error);
});


//Import routes
const indexRoute = require("./routes/index.js")
const postRoute = require("./routes/post.js")
const createRoute = require("./routes/createArticle.js")

//create base route
app.get("/", (req, res) => res.send("DynamicWeb4"));


//set jason array as response
router.get('/', (req, res) => res.send(blogPostsArray));


//Set up app so that it run when this file is run
app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);




