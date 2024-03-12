//require express
const express = require ('express');
//instance from express
const app = express()
//require dotenv
require('dotenv').config()
//connect to DB
const connectDB = require('./config/DbConnection')
connectDB()
//routes
const userRoutes = require("./Routes/Contact");
app.use("/user" , userRoutes);
//port
const port = '4008';
//server
app.listen(port, (err) => {
    err ?
        console.log(err) :
        console.log(`the server is running in http://localhost:${port}`)
})