const express=require("express")
const bcrypt=require("bcrypt")
const { user, validateinput } = require('../model/user.js');
const app= express();
app.use(express.json())
app.post("/createaccount",(req,res)=>{

})
const port=process.env.port
app.listen(port,()=>{
    console.log("server has been started")
})

