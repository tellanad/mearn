const express = require('express');
const bodyparser =require(bodyparser);
const MongoClient =require(MongoClient);

const port = 8085;

const app =express();

app.get('/',function (req,res){
    req.send('Welcome, Hello World!');
});

app.listen(port,function(){
    console.log('Running on port' + port);    
});