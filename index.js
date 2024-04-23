const express=require("express");
const app=express();


app.get("/",(req,res)=>{
    res.send("Test demo app");
})

app.get("/speak",(req,res)=>{
    res.send("Say Hello World");
})


app.listen(3000,()=>{
    console.log("Server running on port 3000");
})