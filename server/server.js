const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const axios = require('axios');

server.listen(8080);
console.log('votre server est enligne');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(express.static('css'));
server.use(express.static("img"));
server.use(express.static("js"));

server.get('/', (req, res) => {
    res.sendFile(__dirname + "\\index.html");
})

server.get('/formulaire', (req, res) => {
    res.sendFile(__dirname + "\\form.html");
})
server.post('/resform', (req, res) => {
    
    var user = req.body
    console.log(user);
    axios.post("http://localhost:8000/addUser", user)
        .then(function () {
            console.log("goooood")
            res.redirect("/");
            res.end()
        })
        .catch(function () {
            console.log("noooooon");
        })
    

});
