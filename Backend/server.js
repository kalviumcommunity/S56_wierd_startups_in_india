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

if (require.main === module) {
  app.listen(port, () => {
    connectToDB()
    console.log(`Server running on PORT: ${port}`);
  });
}

module.exports = app;