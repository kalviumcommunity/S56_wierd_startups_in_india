 const mongoose = require ("mongoose")

 const startupSchema = new mongoose.Schema({
    
company:String,
founder:Array,
product:String,
description:String,
valuation:String,
status:String,
createdby:String
})

const userSchema = new mongoose.Schema({
    name:String
})


const usermodel = mongoose.model("users",userSchema)
const startup = mongoose.model("startup",startupSchema)

module.exports= {usermodel,startup}
