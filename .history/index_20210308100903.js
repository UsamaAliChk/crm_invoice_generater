const axios=require('axios');
const express=require('express');
const app=express();
const mysql = require('mysql');

const port = process.env.PORT || 5000;


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"mydb",
    port:3306
  });
  
  try{
    con.connect(function(err) {
        if (err) throw err;
      });

    con.query("select * from companies where Name=='Samways'",function(err,rows,feilds){
      if(err)
      throw err;
      else{
        console.log(rows[0])
      }
    })
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