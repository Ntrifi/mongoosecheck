//require mongoose
const mongoose = require ("mongoose");
//DB connection
const connectDB =async ()=>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('DB connected..');
    } catch (error) {
        console.log("Can't connect to DB", error);
        
    }
}
module.exports = connectDB