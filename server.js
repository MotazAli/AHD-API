
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {UserTypes,ContactMessages} = require('./data-objects');
const {contactMessagesRouter} = require('./routes/contact-messages-route');
const {contactsRouter} = require('./routes/contact-route');
const {schedulesRouter} = require('./routes/schedule-route');

// const Connection = require('tedious').Connection;

// const connection = new Connection({
//     userName: 'sa',
//     password: 'motaz2712',
//     server: 'localhost\\SQLEXPRESS',
//     port: 1433,
//     options: {
//         enableArithAbort: true,
//         encrypt: true,
//         trustServerCertificate: true}
// });


// const sequelize = new Sequelize('aikidohomedojo', 'root', 'motaz2712', {
//   host: 'localhost',
//   dialect:'mysql',
//   define: {
//     timestamps: false,
//     freezeTableName: true
// }
// });

// const sequelizeObj = new Sequelize('AikidoHomeDojoDB', 'sa', 'motaz2712', {
//     host: 'localhost',
//     port: 1433,
//     dialect:'mssql',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//       },
//     dialectOptions: {
//         options: {
//             // enableArithAbort: true,
//             // encrypt: true,
//             // trustServerCertificate: true,
//             // useUTC: false,
//             // dateFirst: 1,
//             instanceName: "SQLEXPRESS"
//         }
//     },
//     define: {
//       timestamps: false,
//       freezeTableName: true
//   }
//   });



// class UserTypes extends Model {}
// UserTypes.init({
//   id: {
//       type :Sequelize.BIGINT,
//       primaryKey : true,
//       autoIncrement : true
// },
//   type: {
//     type : Sequelize.INTEGER
//   },
//   typeName: {
//     type: Sequelize.STRING
//   }

// }, { sequelizeObj, modelName: 'UserTypes' });


// async function createUser(){
//     let user = await UserTypes.create({type:1});
//     return user;
// } 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req,res)=>{

  res.send("welcome");
  //ContactMessages.findAll().then((data)=>{response.send(data)});
    //  createUser().then((user)=>{
    //      console.log(user);
    //      UserTypes.findAll().then((data)=>{response.send(data)});
    //  });



//     sequelize
//   .authenticate()
//   .then(() => {
//     response.send("Done");
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     response.send("filed");
//     console.error('Unable to connect to the database:', err);
//   });
});
app.use('/assets/schedule',express.static(__dirname + '/assets/schedule'));
app.use('/assets/team',express.static(__dirname + '/assets/team'));
app.use('/Schedules',schedulesRouter);
app.use('/ContactMessage',contactMessagesRouter);
app.use('/Contacts',contactsRouter);


const port = 2404;
app.listen(port,()=>{
    console.log('====  Server started ==== now you can listen to it in http://localhost:'+port.toString())
})