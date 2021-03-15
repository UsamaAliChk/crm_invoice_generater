const axios=require('axios');
const express=require('express');
const app=express();
const mysql = require('mysql');
const bodyParser=require('body-parser')

const port = process.env.PORT || 5000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

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

  }

  catch(err){
    console.log(err)
  }
  

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/companies", (req, res) => {
  con.query("select * from company",function(err,rows,feilds){
    if(err)
    throw err;
    else{
      res.send(rows)
    }
  })  
});

app.get("/company/:id", (req, res) => {
  con.query(`select * from company , address where company.companyId=${req.params.id} and address.addressId=company.addressId`,function(err,rows,feilds){
    if(err)
    throw err;
    else{
      res.send(rows)
    }
  })
});

app.get("/contacts/:id", (req, res) => {
  con.query(`select * from contact,company,address where contact.companyId=${req.params.id} AND company.companyId=contact.ownCompany AND address.addressId=company.addressId`,function(err,rows,feilds){
    if(err)
    throw err;
    else{
      res.send(rows)
    }
  }) 
});

app.post("/invoice/", (req, res) => {
  console.log(req.body);
});