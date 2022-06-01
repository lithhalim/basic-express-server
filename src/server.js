'use strict';

const express = require('express');
const app = express();
///////////////all routes
const mainpage=require("./controllers/mainpage")
const datapage=require("./controllers/datapage")
const testpage=require("./controllers/testpage")
const badconnection=require("./controllers/badconnection")

///////////////////git middelware
const logger= require("../src/middlewares/logger")
const stamper = require('../src/middlewares/stamper');
const validation=require("../src/middlewares/validator")


//////////////////git handlers
const pagenotfound = require('../src/handlers/400');
const errorHandler = require('../src/handlers/500');



////////////////////////////////////////////use logger for all page//////////////////////////////////
app.use(logger)


///////////////////////////////////////////all the router direction ////////////////////////////////
app.get("/",mainpage );

app.get("/data",datapage);

app.get('/test', stamper,testpage );

app.get('/bad',badconnection )

app.get("/:person",validation,(req,res)=>{res.json(req.query)})
//////////////////////error 404 and 505  
app.use(pagenotfound);
app.use(errorHandler);






function start(PORT){
    app.listen(PORT ,()=>{
        console.log(`i'm listening on port ${PORT}`);
    })
}

module.exports ={
    app: app,
    start: start,
}
