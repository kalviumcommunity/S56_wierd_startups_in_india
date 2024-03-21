 const mongoose = require ("mongoose")

 const startupSchema = new mongoose.Schema({
    
company:String,
founder:Array,
product:String,
description:String,
valuation:String,
status:String
})

const startups = mongoose.model("startup",startupSchema)

module.exports= startups