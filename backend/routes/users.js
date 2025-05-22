// this for creating account route
require('dotenv').config()
const router = require("express").Router();
const bcrypt=require("bcrypt")
const { user, validateinput } = require('../model/user.js');
//const connectdb=require("../db.js")
//connectdb();
router.post("/createaccount", async (req,res)=>{
    try{
      const { userName, email, password } = req.body;  
  const { error }=validateinput(req.body);
  if(error){
    return (
  res.json({message:"something went wrong with your inputs pls make sure all correct inputs "})
    )    
  }

const existing= await user.findOne({email:email})
if(existing){
    return(
    res.json({message:"user already exist"}))
}
const hasedpassword= await bcrypt.hash(password,10)
const newuser=new user({
    userName:userName,
    email:email,
    password:hasedpassword
})
 await newuser.save()
res.json({ message:"user created sucessfully",email})
}
catch(error){
    res.json({message:`internal server error ${error}` })
}

})
// const  port=process.env.PORT
// app.listen(3300,()=>{
//     console.log("server has been started")
//     console.log(process.env.MONGODB_URL)
// })
module.exports=router

