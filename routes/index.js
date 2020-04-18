const express = require("express");

const router = express.Router();



//Require firebase
const firebase = require("firebase");

//Initialize firestore 
const db = firebase.firestore();

//Create empty array
const blogpostsArray = [];


//Reference to collections
const blogposts = db.collection("blogposts)";



router.get('/', (req, res) => {
   //Get blogposts
const allBlogPosts = db
   .collection("blogposts")
   .get()
   .then(querySnapshot) => {
   	  querySnapshot.forEach((doc) => {
   	  //push document into array everytime the query loops over existing article
   	  blogpostsArray.push(doc.data());
      });
   })

.catch(function(error) {
    console.log("Error:", error);
});
}

module.exports = router;