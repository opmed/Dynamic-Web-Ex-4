const express = require("express");

const router = express.Router();

const firebase = require("firebase");
const db = firebase.firestore();
const blogposts = db.collection("blogposts)";

const form = `<form action="/create/submit">
<input type="text" name="title" placeholder="title">
<input type="text" name="text" placeholder="title">
<input type="text" name="Author" placeholder="title">
<button type="submit">submit</button>
</form>`;

// /create
router.get('/', (req, res) => res.send(form));

// /create/submit
router.get("/submit", (req, res) => {

const queryParams = req.query;

blogposts
.doc(documentToGet)
.get()
.then(function(doc) {
    res.send (
    	<h1>"submission successful"</h1><p><a href='/create'>Create Another Post</a></p>
    	);
})
.catch(function(error) {
    console.log("Error:", error);
	res.send(`Error Submitting: ${error.toString()}`));
});
};

module.exports = router;