import React ,{useState}from 'react'
import axios from 'axios'
import { useParams , useNavigate } from 'react-router-dom'
const Update = () => {

    let {id}= useParams()
    console.log(id)

    const [factory,setfactory]= useState("")
    const [inventor,setinventor]= useState("")
    const [material,setmaterial]= useState("")
    const [summary,setsummary]= useState("")
    const [cost,setcost]= useState("")
    const [condition,setcondition]= useState("")

    async function Submit (e){
        e.preventDefault()
       console.log('hello')
        try {
          let data = {
            company: factory,
            founder: [inventor],
            product: material,
            description: summary,
            valuation: cost,
            status: condition
          }
          console.log(data)
          const response = await axios.put(`https://s56-wierd-startups-in-india.onrender.com/Update/${id}`,data)
    
                console.log(response,"hello")
        } catch (error) {
           console.log(error)
        }
    }

  return (
    <div>
    <form className='form'   onSubmit={Submit} >
        <h1>Update Form</h1>
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

export default Update
