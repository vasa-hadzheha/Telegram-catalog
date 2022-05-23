const express = require('express')
const app = express()
const options = require("./options")


app.listen(options.port,()=>{
    console.log(`Backend server was started on http://localhost:${options.port}`)
})