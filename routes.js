const express = require('express');
const router = express();

router.get('/get',(req,res)=>{
    res.json("get request")
  })
router.post('/post',(req,res)=>{
    res.json("post request")
  })

  router.put('/put',(req,res)=>{
    res.json("put request")
  })

  router.delete('/delete',(req,res)=>{
    res.json("delete request")
  })

  module.exports={router}