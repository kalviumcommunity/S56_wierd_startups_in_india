import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import './Component/landingPage.css'
import Form from './Component/Form'
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Routes>

      <Route path='/'  element={<Navbar/>}/>
      <Route path='/form'  element={<Form/>}/>
      
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
