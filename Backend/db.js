const mongoose = require("mongoose");
require("dotenv").config()

const connectToDB = async () => {
    try {
      
      const conn = await mongoose.connect(process.env.mongoURI)
      console.log('connected to mongoDB');
    } catch (err) { 
      console.error('error', err.message);
    }
  };

  const isConnectToDB = async ()=>{
   return mongoose.connection.readyState==1
  }

  module.exports={isConnectToDB,connectToDB}