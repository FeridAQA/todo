const express = require('express')
const cors= require('cors')
const app= express()

app.use(cors())
app.use(express.json())


const router=require('../server/src/router/index')
const config = require('./src/config')

app.use('/api/v1',router)



app.listen(config.port,()=>{
    console.log(`server ${config.port} da isleyir`);
})