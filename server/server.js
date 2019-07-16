const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const axios = require('axios');
// le port du serveur
server.listen(8080);
console.log('votre server est enligne');
// un parser qui permet de lire le body sous format de (url encoded)
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
// les fichiers statics 
server.use(express.static('css'));
server.use(express.static("img"));
server.use(express.static("js"));
// le moteur template
server.set('view engine', 'ejs');
// les routes
server.get('/', (req, res) => {
    res.sendFile(__dirname + "\\index.html");
})

server.get('/formulaire', (req, res) => {
    res.sendFile(__dirname + "\\form.html");
})
// l'inscription au chatRoom 
server.post('/addUser', (req, res) => {

    var user = req.body
    console.log(user);
    axios.post("http://localhost:8000/addUser", user)
        .then(function () {
            console.log("goooood")
            res.redirect("/chatRoom");
            res.end();
        })
        .catch(function (err) {
            console.log(err);
            res.end();
        });
});

// la liste des utilisateurs
server.get('/chatRoom', async (req, res) => {
    console.log("toto")
    // la liste des utilisateurs
    let mdr = ""
    await axios.get("http://localhost:8000/userlist")
        .then(function (response) {
            console.log(response.data);
            mdr = response.data
            // res.render("ChatRoom", { gourmand: response.data });

        })
        .catch(function (err) {
            console.error(err);
            res.end();
        });
    await
    axios.get("http://localhost:8000/chatmssg")
        .then(function (resp) {
            console.log(resp.data);
            res.render('ChatRoom', { util: resp.data, gourmand: mdr  });
        })
        .catch(function (err) {
            console.error(err);
            res.end();
        });




});
//la suppression
server.delete('/user/:id', (req, res) => { //:name= variable 
    var userId = req.params["id"];// parms 

    console.log(userId);
    axios.delete("http://localhost:8000/deleteuser/" + userId)
        .then(function () {
            console.log("server : user " + userId + " deleted")
            //res.redirect("/chatRoom");
            res.end();
        })
        .catch(function (err) {
            console.error(err);
            res.end();
        })
});


//envoyer les messages

server.post('/chatmsg', (req, res) => {
    console.log(req.body);
    var msg = req.body;
    axios.post("http://localhost:8000/chatmsg", msg)
        .then(function () {
            res.end();
        })
        .catch(function (err) {
            console.error(err);
            res.end();
        })
})
