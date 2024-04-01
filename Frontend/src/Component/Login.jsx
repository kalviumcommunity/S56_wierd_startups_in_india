import { Link , useNavigate } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import axios from 'axios'


const  Login = () => {

  let navigate = useNavigate()

  const [name,setUserName]=useState("")
  const [userPassword,setUserPassword]=useState("")
  
  let submitbtn =(e)=>{
    e.preventDefault()
    console.log("login clicked")
    axios.post("https://s56-wierd-startups-in-india.onrender.com/login",{username:name,password:userPassword})
    .then((res)=>{
      document.cookie=`username=${name}`  
      console.log(document.cookie)
      console.log(res.data)
      document.cookie=`token=${res.data};expires=Mon,01 April 9999 00:00:00 UTC;path=/;`

      navigate("/")
  })
  .catch((err)=>console.log("there is error"))

 }
  console.log(name , userPassword)
  return (
    <div>
      <form onSubmit={submitbtn} >
      <input type="text"   name='username' value={name}  onChange={(e)=>setUserName(e.target.value)} placeholder='Name'/>
      <input type="text"   name='password' value={userPassword} onChange={(e=>setUserPassword(e.target.value))} placeholder='password' />
        <button onClick={submitbtn}>LOGIN</button>
      </form>
    </div>
  )
}

export default Login
