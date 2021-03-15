const axios=require('axios');
const express=require('express');
const app=express();
const mysql = require('mysql');

const port = process.env.PORT || 5000;


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    port:3306
  });
  
  try{
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
  }
  catch(err){
    console.log(err)
  }
  

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));


app.get("/compnies", (req, res) => {
     
});

app.get("/contracts/:id", (req, res) => {
  
});

app.get("/users/id", (req, res) => {
  
});