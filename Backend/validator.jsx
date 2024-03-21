const joi = require("joi")


const validator = (schema)=>(payload)=>schema.validate(payload,{abortEarly:false})

const signupSchema = joi.object({
    company:joi.string().required(),
    founder:joi.array().required(),
    product:joi.string().required(),
    description:joi.string().required(),
    valuation:joi.string().required(),
    status:joi.string().required()
})

exports.validateSignup = validator(signupSchema)