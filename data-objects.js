//const Sequelize = require('sequelize');
const {Sequelize,sequelizeConnection} = require('./db');
const Model = Sequelize.Model;

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



module.exports = {UserTypes ,ContactMessages};


