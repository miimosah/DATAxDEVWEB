const mysql = require('mysql');
const express = require('express');
const app = express();
var bodyParser = require('body-parser')

app.listen(8000);
console.log('votre API est enligne');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/addUser', (req, res)=>{
    console.log(req.body);
    res.send("mdr");
})