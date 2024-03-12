const userSchema = require("../models/Contact"); 

exports.Register = async (req , res) => {
    try 
    {
        var NewUser =await new userSchema( {...req.body});
        console.log(NewUser)
        await NewUser.save();
        res.status(200).send({msg:"user registred" , user:NewUser});
    }catch (error) {
        console.log(error)
        res.status(401).send(error);
    }
    
}