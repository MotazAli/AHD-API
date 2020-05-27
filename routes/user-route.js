const express = require('express');
const router = express.Router();
const {Users,UserTypes} = require('../data-objects');
const {loginUser , logoutUser} = require('../auth');

const getUser =async ()=>{

    try {
        var user = await Users.findOne({ where:{Email : "zezo@hotmail.com" , Password:"motaz"} , include:[ {model : UserTypes} ]   });
        return user;
    } catch (error) {
        return null;
    }
    
};

router.get("/User",(req,res)=>{
    getUser().then((data)=>{ res.send(JSON.stringify(data) ) });
});


router.post("/Login",(req,res)=>{
    loginUser(req.body).then((data)=>{ 
        if(data !== null) {
            res.status(200).send(JSON.stringify({ result:true , data }));
        }
        else{
            res.status(404).send(JSON.stringify({result : false , message : "Invalid email or password"}));;
        }
    });
});

router.get("/Logout",(req,res)=>{
    logoutUser(1).then((data)=>{ 
        if(data !== null) {
            res.status(200).send(JSON.stringify({result : true ,message : "Successful" }));
        }
        else{
            res.status(404).send(JSON.stringify({result : false , message : "Invalid user" }));
        }
    });
});

module.exports = {usersRouter:router};




