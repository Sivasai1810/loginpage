require('dotenv').config()
const mongoosedb=require("mongoose")
const connectdb = async()=>{
 try{
     await mongoosedb.connect(process.env.MONGODB_URL) 
      console.log("successfully connected to the mongodb")
 }catch(error){
 console.log("unable to connect the database")
 }
}
module.exports=connectdb
