const axios=require('axios');
const express=require('express');
const app=express();
const mysql = require('mysql');

const port = process.env.PORT || 5000;


var con = mysql.createConnection({
  host: "34.207.140.115",
  user: "ec2mysql",
  password: "12345",
  database:"invoicdatabase",
  port:3306
});
  
  try{
      con.connect(function(err) {
        if (err) throw err;
      });
    

    con.query("insert into contact (firstName,lastName,sirName,contactEmail,contactPhoneNumber,addressId,companyId) values ('Ali','Khan','Mr','alikhan@gmail.com','1234624524',3,1)"
    ,function(err,rows,feilds){
      if(err)
      throw err;
      else{
        console.log(rows)
      }
    })
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