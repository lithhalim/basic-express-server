'use strict'

const logger=(req,res,next)=>{
    console.log({
        method:req.method,
        request:req.path
    })
    next()
}

module.exports=logger;