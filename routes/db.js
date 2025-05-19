const mongoose =require("mongoose")
const  { type }= require("os");
const Connectdb= async()=>{
    try{
mongoose.connect("mongodb+srv://nsivasai88:Xmotion18%40@cluster1810.rpxbt.mongodb.net/newlogin")
 console.log("mongoosedb connected sucessfully")   
}
catch(error){
    console.log("somyhing went wrong " +error)
}}

const users=mongoose.Schema({
    username:{type:String,unique:true,required:true},
     password:{type:String,unique:true,required:true}
})
const User=mongoose.model("user",users)
// try{
//   const newuser=new user({
//     username:"sivasai",
//     password:"sivasai"
//   })
//   const saveddata=newuser.save()
//   console.log("yuor data saved sucessfully" + saveddata)

// }catch(error){
//     console.log("somthing went wrong unable to store the date")
// }
module.exports={
  Connectdb,
  User
}