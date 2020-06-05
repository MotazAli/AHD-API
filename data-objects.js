//const Sequelize = require('sequelize');
const {Sequelize,sequelizeConnection} = require('./db');
const Model = Sequelize.Model;


const ScheduleDays ={
  SATURDAY: { id: 1 , name: "Saturday",data: [] } ,
  SUNDAY: { id: 2 , name: "Sunday" ,data: [] },
  MONDAY: { id: 3 , name: "Monday" ,data: []},
  TUESDAY: { id: 4 , name: "Tuesday" ,data: [] },
  WEDNESDAY: { id: 5 , name: "Wednesday",data: [] },
  THURSDAY: { id: 6 , name: "Thursday" ,data: []},
  FRIDAY: { id: 7 , name: "Friday",data: [] }
}


////////////////////////////////////////////////////////////
//////////User///////////////////////////////////////
class Users extends Model {};
Users.init({
  ID: {
      type :Sequelize.BIGINT,
      primaryKey : true,
      autoIncrement : true
},
  FullName:{
    type:Sequelize.STRING
  },
  Username:{
    type:Sequelize.STRING
  },
  Password:{
    type:Sequelize.STRING
  },
  Email:{
    type:Sequelize.STRING
  },
  Gender:{
    type:Sequelize.STRING
  },
  Image:{
    type:Sequelize.STRING
  },
  UserTypeID: {
    type : Sequelize.BIGINT
  },
  Token:{
    type:Sequelize.STRING
  },
  TokenExpiresIn:{
    type:Sequelize.BIGINT
  },
  CreationDate:{
    type:Sequelize.TIME,
    defaultValue: new Date().toISOString()
}

}, { sequelize: sequelizeConnection, modelName: 'Users' });





////////////////////////////////////////////////////////////
//////////User Types///////////////////////////////////////
class UserTypes extends Model {};
UserTypes.init({
  ID: {
      type :Sequelize.BIGINT,
      primaryKey : true,
      autoIncrement : true
},
  Type: {
    type : Sequelize.INTEGER
  },
  TypeName: {
    type: Sequelize.STRING
  }

}, { sequelize: sequelizeConnection, modelName: 'UserTypes' });




////////////////////////////////////////////////////////////
//////////Contact Messages///////////////////////////////////////
class ContactMessages extends Model {};
ContactMessages.init({
  ID: {
      type :Sequelize.BIGINT,
      primaryKey : true,
      autoIncrement : true,
},
  Name: {
    type : Sequelize.STRING
  },
  Email: {
    type: Sequelize.STRING
  },
  Subject:{
      type:Sequelize.STRING
  },
  Message:{
      type:Sequelize.STRING
  },
  CreationDate:{
      type:Sequelize.TIME,
      defaultValue: new Date().toISOString()
  }

}, { sequelize: sequelizeConnection, modelName: 'ContactMessages' });


////////////////////////////////////////////////////
////////////Contact ////////////////////////////////
class Contacts extends Model{}
Contacts.init({
  ID:{
    type:Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement:true
  },
  Name:{type:Sequelize.STRING},
  Phone:{type:Sequelize.STRING},
  Email:{type:Sequelize.STRING},
  IsPrimary:{type:Sequelize.BOOLEAN},
  CreatedBy:{type:Sequelize.BIGINT},
  ModifiedBy:{type:Sequelize.BIGINT},
  CreationDate:{
    type:Sequelize.TIME,
    defaultValue: new Date().toISOString()
},
ModifiedDate:{
  type:Sequelize.TIME,
  defaultValue: new Date().toISOString()
}
},{sequelize : sequelizeConnection, modelName:'Contacts'});




////////////////////////////////////////////////////
////////////Schedules ////////////////////////////////
class Schedules extends Model{}
Schedules.init({
  ID:{
    type:Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement:true
  },
  Place:{type:Sequelize.STRING},
  TeamTypeID:{type:Sequelize.BIGINT},
  StartTime:{type:Sequelize.STRING},
  EndTime:{type:Sequelize.STRING},
  DayID:{type:Sequelize.BIGINT},
  Image:{type:Sequelize.STRING},
  CreatedBy:{type:Sequelize.BIGINT},
  ModifiedBy:{type:Sequelize.BIGINT},
  CreationDate:{
    type:Sequelize.TIME,
    defaultValue: new Date().toISOString()
},
ModifiedDate:{
  type:Sequelize.TIME,
  defaultValue: new Date().toISOString()
}
},{sequelize : sequelizeConnection, modelName:'Schedules'});


////////////////////////////////////////////////////
////////////Teams ////////////////////////////////
class Teams extends Model{}
Teams.init({
  ID:{
    type:Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement:true
  },
  Name:{type:Sequelize.STRING},
  Image:{type:Sequelize.STRING},
  TeamTypeID:{type:Sequelize.BIGINT},
  FacebookURL:{type:Sequelize.STRING},
  InstagramURL:{type:Sequelize.STRING},
  CreatedBy:{type:Sequelize.BIGINT},
  ModifiedBy:{type:Sequelize.BIGINT},
  CreationDate:{
    type:Sequelize.TIME,
    defaultValue: new Date().toISOString()
},
ModifiedDate:{
  type:Sequelize.TIME,
  defaultValue: new Date().toISOString()
}
},{sequelize : sequelizeConnection, modelName:'Teams'});



////////////////////////////////////////////////////
////////////Team Types ////////////////////////////////
class TeamTypes extends Model{}
TeamTypes.init({
  ID:{
    type:Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement:true
  },
  Type:{type:Sequelize.INTEGER},
  Name:{type:Sequelize.STRING},
 
},{sequelize : sequelizeConnection, modelName:'TeamTypes'});



////////////////////////////////////////////////////
////////////Days ////////////////////////////////
class Days extends Model{}
Days.init({
  ID:{
    type:Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement:true
  },
  Name:{type:Sequelize.STRING},
 
},{sequelize : sequelizeConnection, modelName:'Days'});





//////////////////////////////////////////////////////
//////////// relations ///////////////////////////////
TeamTypes.hasOne(Schedules,{foreignKey: 'TeamTypeID'});
Schedules.belongsTo(TeamTypes);

TeamTypes.hasOne(Teams,{foreignKey: 'TeamTypeID'});
Teams.belongsTo(TeamTypes);


Days.hasOne(Schedules,{foreignKey: 'DayID'});
Schedules.belongsTo(Days);

UserTypes.hasOne(Users,{foreignKey: 'UserTypeID'});
Users.belongsTo(UserTypes);

// Schedules.hasMany(TeamTypes, {
//   foreignKey: 'TeamType'
// });
// TeamTypes.belongsTo(Schedules,{foreignKey: 'ID'});

module.exports = {Users,UserTypes ,ContactMessages,Contacts,Schedules,TeamTypes,Days, ScheduleDays,Teams};


