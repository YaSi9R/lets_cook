// Syntac of importing a components 
const express = require('express')
const mongoose=require('mongoose')
const routes=require('./routes')

const app = express()  //Making an object of express.js

app.use(express.json())  //parse the json format
app.use(routes)

// Connecting mongodb databse with our project 
mongoose.connect("mongodb://127.0.0.1/letscook",{
  useNewUrlParser:true,
  useUnifiedTopology: true
})
.then(()=>{
  console.log("Connected to the database! ")
})


app.use(express.json())  //parse the json format
// app.use(routes)

app.listen(3001,()=>{
  console.log(`Server is running at ${3001}`)
})