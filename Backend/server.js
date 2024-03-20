const express = require('express');
const {isConnectToDB,connectToDB}=require('./db')
const cors = require("cors") 
const {router}=require("./routes")
const startup = require ("./Model.js")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())
app.use(router)






app.get('/',(req,res)=>{
  res.send(isConnectToDB()?"Connected to database succesfully" : "Not connected" )
})

app.get('/ping',(req,res)=>{
  res.send("pong")
})


app.get("/getstartup", async (req,res)=>{
  const data = await startup.find({


  })
  res.send(data)
})

app.post("/poststartup",async (req,res)=>{
  await startup.create(req.body)
   .then((el)=>{
    res.json(el)
   })
})

app.put("/Update", (req,res)=>{
 console.log(req.body,"req.body ali ")

   startup.findByIdAndUpdate({_id:req.body.id}, req.body.data)
  .then((el)=>{res.json(el)})
  .catch((err)=>{
    console.log(err)
  })
})

app.delete("/delete/:id" , (req,res)=>{
  console.log(req.params.id)
  startup.findByIdAndDelete({_id:req.params.id})
  .then((el)=>{
    res.send(el)
  })
})

if (require.main === module) {
  app.listen(port, () => {
    connectToDB()
    console.log(`Server running on PORT: ${port}`);
  });
}

module.exports = app;