//jshint esversion: 6
const express = require('express');
const https = require('https');
const bodyParser = require("body-parser");
const request = require ("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
const port = 3001;

app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res)=>{
    
    let fetcchURL = "some_url";
    https.get (url, (response)=>{
                
        response.on("data", (rawData) => {
        let data = JSON.parse(rawData);          
         
		res.writes ('some_html_code');
        res.write ('more_html_code');
        res.send();
        })
    });
});
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})