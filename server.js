//require express
const express = require ('express');
//instance from express
const app = express()
//require dotenv
require('dotenv').config()
// mid-ware JSON
app.use(express.json());
//connect to DB
const connectDB = require('./config/DbConnection')
connectDB()
//routes
app.use('/api/contact',require ('./Routes/Contact'))
//port
const PORT= process.env.PORT
//server
app.listen(PORT, (err) => {
    err ?
        console.log(err) :
        console.log(`the server is running in http://localhost:${PORT}`)
})