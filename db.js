const Sequelize = require('sequelize');

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

const sequelizeConnection = new Sequelize('AikidoHomeDojoDB', 'sa', 'motaz2712', {
    host: 'localhost',
    port: 1433,
    dialect:'mssql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
    dialectOptions: {
        options: {
            // enableArithAbort: true,
            // encrypt: true,
            // trustServerCertificate: true,
            // useUTC: false,
            // dateFirst: 1,
            instanceName: "SQLEXPRESS"
        }
    },
    define: {
      timestamps: false,
      freezeTableName: true
  }
  });


  module.exports = {Sequelize , sequelizeConnection};