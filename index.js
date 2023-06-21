const express = require('express');
const route = require('./second');


const index = express()
index.use(route)


index.listen(8001,()=>{
console.log("success");
})
