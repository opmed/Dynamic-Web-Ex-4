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


//Reference to collections
const blogposts = db.collection("blogposts)";

router.get('/', (req, res) => {
const queryId = req.params.id;
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
}

return
	res.send(blogPostsArray));

module.exports = router;