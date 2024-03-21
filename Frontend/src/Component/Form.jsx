import React, { useState } from 'react'
import "./Form.css"
import axios from "axios"
const Form = () => {
 
    const [factory,setfactory]= useState("")
    const [inventor,setinventor]= useState("")
    const [material,setmaterial]= useState("")
    const [summary,setsummary]= useState("")
    const [cost,setcost]= useState("")
    const [condition,setcondition]= useState("")


    console.log(factory , inventor , material , summary , cost , condition)
    const Submit = (e)=>{
        e.preventDefault();
        axios.post("https://s56-wierd-startups-in-india.onrender.com/poststartup",{
            company:factory,
            founder:[inventor],
            product:material,
            description:summary,
            valuation:cost,
            status:condition
        
        })
        .then(result=>console.log(result.data))
        .catch(err=>console.log(err))
    

       
        
        
    }
    

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
