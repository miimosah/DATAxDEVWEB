const mysql = require('mysql');
const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.listen(8000);
console.log('votre API est enligne');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//l'ajout des new useres et envoyer les données à la bdd

app.post('/addUser', (req, res) => {
    console.log(req.body)
    var connexion = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "chatnanterre",
    });
    connexion.connect(function (err) {
        if (!err) {
            console.log("Connected!");
        } else
            console.log(err);

        var sql = "INSERT INTO users ( user_name, user_psw) values(?,?)";
        connexion.query(sql, [req.body.Pseudo, req.body.password], (err) => {
            if (err) {
                console.log(err)
            }
        
            res.end();
        });
        connexion.end();
    });
});
// afficher la liste des utilisateurs
app.get('/userlist', (req, res) => {
    console.log(req.body)
    var connexion = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "chatnanterre",
    });
    connexion.connect(function (err) {
        if (!err) {
            console.log("Connected!");
        } else
            console.error(err);

        var sql = "SELECT user_name, user_id FROM users";
        connexion.query(sql, (err,results) => {
            if (err) {
                console.log(err)
            }
            console.log(results);
            res.send(results);
        });
        connexion.end();
    });
});

//la suppression

app.delete('/deleteuser/:id', (req, res) => {
 
    var connexion = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "chatnanterre",
    });
    connexion.connect(function (err) {
        if (!err) {
            console.log("Connected!");
        } else
            console.log(err);

        var sql = "DELETE from users WHERE user_id=?";
        connexion.query(sql, req.params['id'], (err) => {
            
            if (err) {
                console.log(err)
            }
        
            res.end();
        });
        connexion.end();
    });
});

// envoyer les messages
app.post('/chatmsg', (req, res) => {

    var connexion = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "chatnanterre",
    });
    connexion.connect(function (err) {
        if (!err) {
            console.log("Connected!");
        } else
            console.log(err);

        var sql = "INSERT INTO messages (message, sent_date, user_id) VALUES (?, NOW(), ?)";
        connexion.query(sql,[req.body.textmsg, req.params.id], (err, results) => {
            
            if (err) {
                console.log(err)
            }   
        
            res.end();
        });
        connexion.end();
    });

})
//afficher les messages 
app.get('/chatmssg', (req, res)=>{
    var connexion = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "chatnanterre",
    });
    connexion.connect(function (err) {
        if (!err) {
            console.log("Connected!");
        } else
            console.log(err);
            var sql = "SELECT users.user_name, users.user_id, messages.message FROM users JOIN messages ON users.user_id = messages.user_id";
            
            connexion.query(sql, (err, results) => {
                
                if (err) {
                    console.log(err)
                }   

            console.log(results);    
            res.send(results);
                res.end();
            });
            connexion.end();
        });
             
} )
