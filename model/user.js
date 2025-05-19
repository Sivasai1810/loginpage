const mongodb =require("mongoose")
const joi=require("joi")
const jwt=required("jsonwebtoken")
const { type } = require("os")
const userSchema=mongodb.Schema({
    firstName:{type:String,required:true,unique:true},
     lastName:{type:String,required:true,unique:true},
      email:{type:String,required:true,unique:true},
       password:{type:String,required:true,unique:true}
})
userSchema.methods.generateAuthToken=()=>{
  const token=jwt.Sign({id:this._id},process.env.JWT_PASSWORD,{expiresIn:'7d'})
return token
}
     
const user=mongodb.model("user",userSchema)
const validateinput=(data)=>{
   const Schema =joi.object({
    firstName:joi.string().required().label("firstname"),
     lastName:joi.string().required().label("lastname"),
    password:joi.string().required().label("password must be 6 to 8 letters").min(6).max(8),
       email:joi.email().required().label("email")
   })
   return Schema.validateinput(data)
}
module.exports={
   user,
   validateinput
}
