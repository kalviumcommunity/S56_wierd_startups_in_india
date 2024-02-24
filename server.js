const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const {isConnectToDB,connectToDB}=require('./db')



try{

  connectToDB()
}
catch(error){
  console.log(error)
}
// isConnectToDB()

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

module.exports = app;