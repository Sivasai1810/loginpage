const  express =require("express")
const  bcrypt =require("bcrypt")
const jwt= require("jsonwebtoken")
const { Connectdb,User}  =require('./db.js');
const app=express();
app.use(express.json())
Connectdb();
const jwtpassword=2024;
app.post("/signup", async (req,res)=>{
    try{
    const {username,password}=req.body;
        const existing= await User.findOne({username:username})
    if(!existing){
         const hassedpassword= await bcrypt.hash(password,10)
    const newuser=new User({
        username,
        password:hassedpassword
    })
        await newuser.save()
        jwt.sign()
        res.json({msg:"your data is saved sucessfully"})
      
    }else{
      res.json({msg:"your account already is existed"})  
}
}catch(error){
        res.json({msg:"somthing went wrong" +error})
    }

})
app.listen(1934 ,()=>{
console.log("server is started")
})