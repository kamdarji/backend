require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta',(req,res)=>{
    res.send('kamdarji001')
})

app.get('/aman',(req,res) => {
    res.send('Aman mobile number 7089145251')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})