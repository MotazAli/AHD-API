const express = require('express');
const router = express.Router();
const {Teams,TeamTypes} = require('../data-objects');

 


const getTeams =async ()=>{

    try {

        const teams = await Teams.findAll({  include:[ {model : TeamTypes} ] });

        return teams;
    } catch (error) {
        return error;
    }
    
};

const getTeamTypes =async ()=>{

    try {

        const teamTypes = await TeamTypes.findAll();

        return teamTypes;
    } catch (error) {
        return error;
    }
    
};


router.get("/Team",(req,res)=>{
    getTeams().then((data)=>{ res.send(JSON.stringify(data) ) });
});

router.post("/Team",(req,res)=>{
    addTeam(req.body).then((data)=>{ res.send(JSON.stringify(data) ) });
});


router.get("/TeamType",(req,res)=>{
    getTeamTypes().then((data)=>{ res.send(JSON.stringify(data) ) });
});

module.exports = {teamsRouter:router};