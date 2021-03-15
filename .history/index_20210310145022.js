const axios=require('axios');
const express=require('express');
const app=express();
const mysql = require('mysql');

const port = process.env.PORT || 5000;


var con = mysql.createConnection({
    host: "ec2-3-88-18-125.compute-1.amazonaws.com",
    user: "usamaali",
    password: "usama123",
    database:"mydb",
    port:3306
  });
  
  try{
    con.connect(function(err) {
        if (err) throw err;
        console.log("connected")
      });

    // con.query("select * from companies",function(err,rows,feilds){
    //   if(err)
    //   throw err;
    //   else{
    //     console.log(rows)
    //   }
    // })
  }
  catch(err){
    console.log(err)
  }
  

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));


app.get("/companies", (req, res) => {
  con.query("select * from companies",function(err,rows,feilds){
    if(err)
    throw err;
    else{
      res.send(rows)
    }
  })  
});

app.get("/contacts/:id", (req, res) => {
  con.query(`select * from contracts where company_id=${req.params.id}`,function(err,rows,feilds){
    if(err)
    throw err;
    else{
      res.send(rows)
    }
  }) 
});

app.get("/users/:id", (req, res) => {
  con.query(`select * from members where company_id=${req.params.id}`,function(err,rows,feilds){
    if(err)
    throw err;
    else{
      res.send(rows)
    }
  })
});