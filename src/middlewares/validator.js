const validation=((req,res,next)=>{
    if(JSON.stringify(req.query.name).length===2){
        res.send("You Must Input Name")
        return
    }
    else if((!isNaN(parseInt( (req.query.name))))){
        res.send("you insert number must insert name here")
        return
    }
    next()
})


module.exports=validation