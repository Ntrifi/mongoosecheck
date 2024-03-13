const express = require ('express');
const Contact = require ('../models/Contact')

const router= express.Router();

//add
router.post("/add", async (req,res)=>{
    try {
        const {name, email, phone} = req.body;
        const newContact = new Contact({name, email, phone});
        await newContact.save();
        res.status(200).send({ message:"Contact added", newContact});
    } catch (error) {
        res.status(400).send({message:"Can't added contact!!",error})
    }
});
//Get ALL
router.get('/all', async (req,res)=>{
    try {
        const listContact= await Contact.find();
        res.status(200)
        .send({msg: "I get all Contact ", listContact});            
    } catch (error) {
        res.status(400).send({msg:"Can't get Contact"});        
    }
});
//Get ONE
router.get('/:id', async (req,res)=>{
    try {
        const contactToGet = await Contact.findOne({_id: req.params.id});
        res.status(200).send({msg:"I get the contact", contactToGet});
    } catch (error) {
        res.status(400).send({msg:"Can't get the contact", error});    
    }
});
// Delete
router.delete('/:_id', async (req,res)=>{
    try {
        const { _id } = req.params;
        await Contact.findOneAndDelete({ _id });
        res.status(200).send({msg:"Contact deleted"});
    } catch (error) {
        res.status(400).send({msg:"Can't delete contact ", error});    
    }
});
// Edit
router.put('/:_id', async (req,res)=>{
    try {
        const { _id } = req.params;
        const result= await Contact.updateOne({ _id },{$set:{...req.body}});
        res.status(200).send({msg:"Contact updateded"});
    } catch (error) {
        res.status(400).send({msg:"Can't update contact with this id !", error});    
    }
});
// Export
module.exports = router;