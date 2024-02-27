const express = require('express');
const router = express();

router.get('/get',(req,res)=>{
    try{
        res.json("get request")
    }
    catch(error){
        console.log(error)
    }
    
  })
router.post('/post',(req,res)=>{

    try{

        res.json("post request")
    } 
    catch(error){
        console.log(error)
    }
  })

  router.put('/put',(req,res)=>{
    try{

        res.json("put request")
    }
    catch(error){
        console.log(error)
    }
  })

  router.delete('/delete',(req,res)=>{
    try{

        res.json("delete request")
    } 
    catch(error){
        console.log(error)
    }
  })

  module.exports={router}