require('dotenv').config()
const mongoosedb=require("mongoose")
const connectdb = async()=>{
 try{
    mongoosedb.connect("mongodb+srv://nsivasai88:vZQfnujJCtiXAQUV@cluster1.tnnn9qq.mongodb.net/usersdata",{
        useNewUrlParser:true,
        useUnifiedTopology:true ,
      
    }) 
      console.log("successfully connected to the mongodb")
 }catch(error){
 console.log("unable to connect the database")
 }
}
module.exports=connectdb
