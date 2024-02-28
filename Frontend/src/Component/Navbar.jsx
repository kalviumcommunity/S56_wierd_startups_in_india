import React from 'react'
import './landingPage.css'
import MenuIcon from '@mui/icons-material/Menu';

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

    </div>
  )
}

export default Navbar
