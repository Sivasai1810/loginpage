const mongoosedb=require("mongoose")
const connection= async()=>{
 try{
    mongoosedb.connect(process.env. Mongodburl,{
        useNewUrlParser:true,
        useUnifiendTopology:true ,
      
    }) 
      console.log("successfully connected to the mongodb")
 }catch(error){
 console.log("unable to connect the database")
 }
}
module.exports=({
    connection
})