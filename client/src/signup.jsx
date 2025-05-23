import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


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
  
      <form onSubmit={handlepushdata}>
        <input type='text' placeholder='username' name='userName'  value={account.userName} onChange={handlechange}/>
        <input type='text' placeholder='email' name='email'value={account.email} onChange={handlechange}/>
         <input type='text' placeholder='password' name='password'value={account.password} onChange={handlechange}/>
         <button type='submit'>signup</button>
         <Link to="/main"> login</Link>
         {message1!==null && message1!==undefined &&<p>{message1}</p>}
         
      </form>
        
     

  )
}

export default signup
