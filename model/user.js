require('dotenv').config()
const mongodb =require("mongoose")
const joi=require("joi")
const jwt=require("jsonwebtoken")
const { type } = require("os")
const userSchema=mongodb.Schema({
    userName:{type:String,required:true,unique:true},
      email:{type:String,required:true},
       password:{type:String,required:true}
})
userSchema.methods.generateAuthToken= function (){
  const token=jwt.sign({id:this._id},process.env.JWT_PASSWORD,{expiresIn:'7d'})
return token
}
     
const user=mongodb.model("user",userSchema)
const validateinput=(data)=>{
   const Schema =joi.object({
    userName:joi.string().required().label("username"),
    password:joi.string().required().label("password must be 6 to 8 letters").min(6).max(8),
       email:joi.string().email().required().label("email")
   })
   return Schema.validate(data)
}
module.exports={
   user,
   validateinput,
   
}
