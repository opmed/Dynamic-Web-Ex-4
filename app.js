//Import Express
const express = require ("express");

//Initiate Express to app
const app = express();

//Set port - if env.port use that otherwise use 4000
const port = process.env.PORT || 4000;

//create base route
app.get("/", (req, res) => res.send("DynamicWeb4"));

//Set up app so that it run when this file is run
app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);