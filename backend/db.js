// require('dotenv').config()
// const mongoosedb=require("mongoose")
// const connectdb = async()=>{
//  try{
//      await mongoosedb.connect(process.env.MONGODB_URL) 
//       console.log("successfully connected to the mongodb")
//  }catch(error){
//  console.log("unable to connect the database")
//  }
// }
// module.exports=connectdb
require('dotenv').config();
const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    console.log("Connecting to MongoDB at:", process.env.MONGODB_URL); 
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(" Successfully connected to MongoDB");
  } catch (error) {
    console.error(" Unable to connect to the database:", error.message); 
    console.error(error); 
  }
};

module.exports = connectdb;

