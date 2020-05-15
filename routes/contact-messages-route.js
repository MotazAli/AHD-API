const express = require('express');
const router = express.Router();
const {ContactMessages} = require('../data-objects');


// const Message = (name,email,subject,message)=>
// ({name,email,subject,message});

async function insertMessage(jsonObj){
  let message = await ContactMessages.create(jsonObj);
  if( message == null || message.ID === undefined || message.ID == null ||message.ID <= 0) return false
  return true;
}


router.post('/Message',(req,res)=>{
  insertMessage(req.body)
  .then((data)=>{ 
    res.send( JSON.stringify(data) )
  });
});

router.get('/Message', (request,response)=>{
    ContactMessages.findAll().then((data)=>{response.send(JSON.stringify( data))});
  });


  module.exports = { contactMessagesRouter: router} ;