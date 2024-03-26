import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import './Component/landingPage.css'
import Form from './Component/Form'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Update from './Component/Update'
import Login from './Component/Login'
function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Routes>

      <Route path='/'  element={<Navbar/>}/>
      <Route path='/form'  element={<Form/>}/>
      <Route path='/Update/:id' element={<Update/>}></Route>
      <Route path="/Login"  element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
