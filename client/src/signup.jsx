import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './loginstyle.css'


function signup() {
  const [account, setAccount] = useState({
    userName:"",
    email:"",
    password:""
  })
  const [message1,setMessage]=useState("")
  const handlechange=(e)=>{
    setAccount((a)=>({
      ...a,
      [e.target.name]:e.target.value
    }))
  }
  const handlepushdata= async (e)=>{
    e.preventDefault()
    const  res=await axios.post("http://localhost:2024/api/users/createaccount",account) 
  setMessage(res.data.message)
     console.log(res.data.message)
   

  }

  return (
  
      <form  className="header"onSubmit={handlepushdata}>
        <h1> Create Account</h1>
        <input className='input' type='text' placeholder='username' name='userName'  value={account.userName} onChange={handlechange}/><br/>
        <input  className='input'type='text' placeholder='email' name='email'value={account.email} onChange={handlechange}/><br/>
         <input  className='input' type='text' placeholder='password' name='password'value={account.password} onChange={handlechange}/>
         <button  className="button"type='submit'>signup</button><br/>
         <Link   className="link" to="/main"> login</Link><br/>
         {message1!==null && message1!==undefined &&<p>{message1}</p>}
         
      </form>
        
     

  )
}

export default signup
