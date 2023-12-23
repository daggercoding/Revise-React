const express = require('express');
const cors=require("cors")
const mysql = require("mysql")

const app = express();

app.use(express.json())
app.use(cors())

const db=mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"crud"
})

app.get("/",(req,res)=>
{
    db.query("SELECT * FROM cards",(err,data)=>
    {
        if(err)return res.json("error")
        if(data)return res.json(data)

    })
})

app.post("/create",(req,res)=>{
    const sql = "INSERT INTO cards(`Image`,`Position`,`Title`,`Perception`,`By`) VALUES (?)"

     const values=[
        req.body.Image,
        req.body.Position,
        req.body.Title,
        req.body.Perception,
        req.body.By
     ]

     db.query(sql,[values],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);

     })
})

app.listen(8000, () => {
    console.log("server is running");
});
