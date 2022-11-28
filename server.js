require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const source = process.env.DATABASE_URL;

mongoose.connect(source,{useNewUrlParser: true})
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',() => console.log('Connected to Database'))

app.use(express.json())                                             //set server to accept json 

const llamadasRouter = require('./routes/llamadas')                  //setup routes
app.use('/llamadas', llamadasRouter)

app.listen(3000, () => console.log('Server Started'))