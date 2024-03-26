import { Link  } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import axios from 'axios'


const  Login = () => {
  const [name,setUserName]=useState("")
  const [userPassword,setUserPassword]=useState("")
  
  const   submitbtn =(e)=>{
    e.preventDefault()
    
    axios.post("http://localhost:3200/login",{username:name,password:userPassword})
    .then((res)=>{
      document.cookie=`username=${name}`  
      console.log(document.cookie)
    console.log(res) 
  })
  .catch((err)=>console.log(err))

 }

  return (
    <div>
      <form onSubmit={submitbtn} >
      <input type="text"   name='username' value={name}  onChange={(e)=>setUserName(e.target.value)} placeholder='Name'/>
      <input type="text"   name='password' value={userPassword} onChange={(e=>setUserPassword(e.target.value))} placeholder='password' />
      <Link  to={"/"}>
        <button  type='submit'  >Login </button>
        </Link>
      </form>
    </div>
  )
}

export default Login
