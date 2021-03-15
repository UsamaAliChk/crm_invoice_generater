const axios=require('axios');
const express=require('express');
const app=express();
const mysql = require('mysql');

const port = process.env.PORT || 5000;


var con = mysql.createConnection({
    host: "localhost",
    user: "Usama",
    password: "12345678"
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