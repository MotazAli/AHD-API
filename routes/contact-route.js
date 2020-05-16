const express = require('express');
const router = express.Router();
const {Contacts} = require('../data-objects');




const getActiveContact =async ()=>{

    try {
        var contact = await Contacts.findOne({where:{IsPrimary : true}});
        return contact;
    } catch (error) {
        return null;
    }
    
};


router.get("/Contact",(req,res)=>{
    getActiveContact().then((data)=>{ res.send(JSON.stringify(data) ) });
});

module.exports = {contactsRouter:router};




