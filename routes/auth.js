//this for login page routes if the user already exists then only the user can acess this page 
require('dotenv').config()
const router = require("express").Router();
const joi=require("joi")
const bcrypt =require("bcrypt")
const {user} = require("../model/user");
router.post("/login", async(req,res)=>{
    try{
    const {email,password}=req.body
   const { error }=validateinput(req.body)
   if(error){
    return(
        res.send("somthing went wrong please enter  correct input ")
    )
   }
   const existing= await user.findOne({email:email})
   if(!existing){
    return(
        res.send("invalid Email or password")
    )}
    const verifypassword= await bcrypt.compare(password,existing.password)
    if(!verifypassword){
        return(
            res.send("invalid email or password")
        )
    }
    res.send("loggined sucessfully"+email)
    }catch(error){
        res.send("internal server error")
    }
})
const validateinput=(data)=>{
 const Schema=joi.object({
    email:joi.string().email().required().label("email"),
    password:joi.string().required().min(6).max(8).label("password")
 })
    return Schema.validate(data)
}
// port=process.env.PORT
// app.listen(port,()=>{
//     console.log("server has been started")
// })
module.exports=router