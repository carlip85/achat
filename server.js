var express = require('express');
var jquery = require('jquery')
var app = express();
var http = require('http');
var server = http.createServer(app);
var bodyParser  = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/loader.html");
});

app.post('/', function(req, res) {
  var saveMe=req.body;
  console.log(saveMe);
  fs.writeFile('clicks',JSON.stringify(saveMe),err =>{
    if (err){
      console.error(err)
      return
    }
  });
  res.sendStatus(200);
});

server.listen('8080',()=>{
  console.log("8080")
});