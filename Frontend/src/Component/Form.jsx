import React, { useState,useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';
import "./Form.css"
import axios from "axios"


const Form = () => {
    const navigate = useNavigate()
    const [factory,setfactory]= useState("")
    const [inventor,setinventor]= useState("")
    const [material,setmaterial]= useState("")
    const [summary,setsummary]= useState("")
    const [cost,setcost]= useState("")
    const [condition,setcondition]= useState("")
    const [createdBy, setCreatedBy] = useState("")



  const Submit = (e) => {
    e.preventDefault();
    
    const formData = {
      company: factory,
      founder: [inventor],
      product: material,
      description: summary,
      valuation: cost,
      status: condition,
      createdby: createdBy
    };
  console.log(formData,"sagar data ")

    axios.post("http://localhost:3200/poststartup", formData)
      .then(result => console.log(result))
      navigate("/")
      .catch(err => console.log(err));


    
  }
  
    
  useEffect(() => {
    const cookieValue = document.cookie.split(";")[0].split("=")[1];
    console.log(cookieValue)
    setCreatedBy(cookieValue);
}, [])

  return (
    <div>
      <form className='form'   onSubmit={Submit} >
        <input type="text" name="company" placeholder='Company'  required  onChange={(e)=>setfactory(e.target.value)}  />
        <input type="text"  name="founder" placeholder='Founder' required  onChange={(e)=>setinventor(e.target.value)}   />
        <input type="text" name="product" placeholder='Product' required onChange={(e)=>setmaterial(e.target.value)}   />
        <input type="text" name="description" placeholder='Description' required onChange={(e)=>setsummary(e.target.value)}  />
        <input type="text" name="valuation" placeholder='valuation' required  onChange={(e)=>setcost(e.target.value)}  />
        <input type="text" name="status" placeholder='status' required onChange={(e)=>setcondition(e.target.value)}  />
         <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
