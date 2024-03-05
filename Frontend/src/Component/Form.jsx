import React, { useState } from 'react'
import "./Form.css"
import axios from "axios"
const Form = () => {
 
    const [company,setCompany]= useState()
    const [founder,setFounder]= useState()
    const [product,setProduct]= useState()
    const [description,setDescription]= useState()
    const [valuation,setValuation]= useState()
    const [status,setStatus]= useState()


    const Submit = (e)=>{
        e.preventDefault();
        axios.post("https://s56-wierd-startups-in-india.onrender.com/getstartup",{company,founder,product,description,valuation,status})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    
    }

  return (
    <div>
      <form className='form'   onSubmit={Submit} >
        <input type="text" placeholder='Company'  required  onChange={(e)=>setCompany(e.target.value)}  />
        <input type="text" placeholder='Founder' required  onChange={(e)=>setFounder(e.target.value)}   />
        <input type="text" placeholder='Product' required onChange={(e)=>setProduct(e.target.value)}   />
        <input type="text" placeholder='Description' required onChange={(e)=>setDescription(e.target.value)}  />
        <input type="text" placeholder='valuation' required  onChange={(e)=>setValuation(e.target.value)}  />
        <input type="text" placeholder='status' required onChange={(e)=>setStatus(e.target.value)}  />
         <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
