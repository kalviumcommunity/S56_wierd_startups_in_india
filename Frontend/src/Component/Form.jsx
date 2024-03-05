import React, { useState } from 'react'
import "./Form.css"
import axios from "axios"
const Form = () => {
 
    const [factory,setCompany]= useState()
    const [inventor,setFounder]= useState()
    const [material,setProduct]= useState()
    const [summary,setDescription]= useState()
    const [cost,setValuation]= useState()
    const [condition,setStatus]= useState()


    const Submit = (e)=>{
        e.preventDefault();
        axios.post("https://s56-wierd-startups-in-india.onrender.com/poststartup",{company:factory,founder:[inventor],product:material,description:summary,valuation:cost,status:condition})
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
