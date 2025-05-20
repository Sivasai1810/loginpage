require('dotenv').config()
const express=require("express")
const bcrypt=require("bcrypt")
const { user, validateinput } = require('../model/user.js');
const connectdb=require("../db.js")
const app= express();
app.use(express.json());
connectdb();
app.post("/createaccount", async (req,res)=>{
    try{
      const { userName, email, password } = req.body;  
  const { error }=validateinput(req.body);
  if(error){
    return (
  res.send("something went wrong with your inputs pls make sure all correct inputs ")
    )    
  }

const existing= await user.findOne({email:email})
if(existing){
    return(
    res.status(409).send("user already exist"))
}
const hasedpassword= await bcrypt.hash(password,10)
const newuser=new user({
    userName:userName,
    email:email,
    password:hasedpassword
})
 await newuser.save()
res.status(200).send("user created sucessfully")
}
catch(error){
    res.status(500).json({msg:`internal server error ${error}` })
}

})
//const port=process.env.PORT || 1996
app.listen(3000,()=>{
    console.log("server has been started")
})

