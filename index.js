const express  = require('express');
const app = express();

app.use (logger)

app.get("/",(req,res)=>{
    res.send("Home Page adfafsdasf")
})

app.get("/product",auth,(req,res)=>{
    console.log("Product page");
    res.send("Product Page ")
})

function logger(req,res,next){
    console.log("log");
    next();
}

function auth(req,res,next){
    if(req.query.admin === "true"){
        next();
    }else{  
        res.send("No auth")
    }
}

app.listen(3001)