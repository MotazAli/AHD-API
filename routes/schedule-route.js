const express = require('express');
const router = express.Router();
const {Schedules,TeamTypes,Days,ScheduleDays} = require('../data-objects');

 


const getSchedules =async ()=>{

    try {

        var ScheduleDaysClone = {...ScheduleDays};
        ScheduleDaysClone.SATURDAY.data = await Schedules.findAll({ where:{DayId : ScheduleDays.SATURDAY.id } , include:[ {model : TeamTypes},{model : Days} ] });
        ScheduleDaysClone.SUNDAY.data = await Schedules.findAll({ where:{DayId : ScheduleDays.SUNDAY.id } , include:[ {model : TeamTypes},{model : Days} ] });
        ScheduleDaysClone.MONDAY.data = await Schedules.findAll({ where:{DayId : ScheduleDays.MONDAY.id } , include:[ {model : TeamTypes},{model : Days} ] });
        ScheduleDaysClone.TUESDAY.data = await Schedules.findAll({ where:{DayId : ScheduleDays.TUESDAY.id } , include:[ {model : TeamTypes},{model : Days} ] });
        ScheduleDaysClone.WEDNESDAY.data = await Schedules.findAll({ where:{DayId : ScheduleDays.WEDNESDAY.id } , include:[ {model : TeamTypes},{model : Days} ] });
        ScheduleDaysClone.THURSDAY.data = await Schedules.findAll({ where:{DayId : ScheduleDays.THURSDAY.id } , include:[ {model : TeamTypes},{model : Days} ] });
        ScheduleDaysClone.FRIDAY.data = await Schedules.findAll({ where:{DayId : ScheduleDays.FRIDAY.id } , include:[ {model : TeamTypes},{model : Days} ] });


        //var shedules = await Schedules.findAll({include:[ {model : TeamTypes},{model : Days} ] });
        return ScheduleDaysClone;
    } catch (error) {
        return error;
    }
    
};


router.get("/",(req,res)=>{
    getSchedules().then((data)=>{ res.send(JSON.stringify(data) ) });
});

module.exports = {schedulesRouter:router};