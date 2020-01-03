// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('website'));

const port = 5501;

// TODO-Spin up the server
const server = app.listen(port,listening);
function listening(){
    console.log(`We are using port ${port}`)
};
app.post('/addData', addProjectData);
app.get('/all', sendData);


function sendData (req, res) {
  res.send(projectData);
};




function addProjectData (req,res){
    //projectData.push(req.body);
    projectData = req.body;
    console.log(req.body);
};