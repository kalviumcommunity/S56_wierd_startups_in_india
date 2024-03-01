import React from 'react'
import './landingPage.css'
import MenuIcon from '@mui/icons-material/Menu';
import data from "./data.json"

const Navbar = () => {
  return (
    <div className='main' >
      <div className='top' >
        <div className='title' ><strong>Weird Startups</strong></div>

        <div className='home' >
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>News</li>
            </ul>
        </div>
        <MenuIcon/>
        
         </div>

         <div><h1>"Where Imagination Takes Flight: Weird Startups,  <br /> Bridging the Gap Between the Strange and the Successful!"</h1></div>


      <div  > 

     {
       data.map((element)=>{
        return(<div div className='card'>
        <h1>Company:{element.Company}</h1>
        <h2>Founder:{element.Founder}</h2>
        <h3>Product:{element.Product}</h3>
        </div>)
       })
     }



      </div>
    </div>
  )
}

export default Navbar
