const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const {isConnectToDB,connectToDB}=require('./db')
const cors = require("cors")
const {router}=require("./routes")
const startup = require ("./Model.js")

try{

  connectToDB()
}
catch(error){
  console.log(error)
}


app.use(cors())
app.get('/',(req,res)=>{
  res.send(isConnectToDB()?"Connected to database succesfully" : "Not connected" )
})

app.get('/ping',(req,res)=>{
  res.send("pong")
})
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on PORT: ${port}`);
  });
}

app.get("getstartup", async (req,res)=>{
  const data = await startup.find({


  })
  res.send(data)
})

app.use(router)
module.exports = app;