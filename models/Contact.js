let mongoose = require('mongoose'); 
let userSchema  = new mongoose.Schema({
    name : {
        type: String,
        required : true,
    } ,
    age: { 
        type: Number 
    },
    favoriteFoods: { 
        type: [String] 
    },
})
module.exports = mongoose.model('Users', userSchema)