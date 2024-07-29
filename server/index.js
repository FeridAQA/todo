const express = require('express')
const cors= require('cors')
const app= express()

app.use(cors())
app.use(express.json())

const port=3000

const router=require('../server/src/router/index')

app.use('/api/v1',router)



app.listen(port,()=>{
    console.log(`server ${port} da isleyir`);
})