import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import './loginstyle.css'
const loginpage=()=>{
    const [logindata,setLogindata]=useState({
 email:"",
 password:""
})
const [message2,setMessage2]=useState("")
const handlechange=(e)=>{
   setLogindata((l)=>({
    ...l,
    [e.target.name]:e.target.value
   }))
}
const handelget= async(e)=>{
e.preventDefault();
try{
    const res=await axios.post("http://localhost:2024/api/auth/login",logindata)
    console.log(res.data)
    setMessage2(res.data.message)
}catch(error){
    console.log("unable to fectch the data from backend"+error)
}
}    
    return(
        <form className="header" onSubmit={handelget}>
            <h1>WELCOME TO THE XMOTION </h1>
            <input  className="input" type="text" placeholder="enter the email" value={logindata.email}  name="email" onChange={handlechange} /><br/>
             <input   className="input" type="text" placeholder="enter the password" value={logindata.password}  name="password" onChange={handlechange} /><br/>
             <button  className="button"type="submit"> login</button><br/><br/>
             <Link className="link" to ='/signup'>Create Account</Link>
             {message2!==null && message2!==undefined && <p className="message">{message2}</p>}
        </form>
    )


}
export default loginpage; 