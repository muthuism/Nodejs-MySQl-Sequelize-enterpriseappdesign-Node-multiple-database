const Sequelize= require('sequelize');
var sqldb = {};
const sequelize=new Sequelize('appbook','root','root',{
host:"localhost",
port:3306,
dialect: 'mysql',
operatorsAliases :false,

pool:{
    max:5,min:0,
    acquire:30000,
    idle:10000
},

});

sqldb.sequelize = sequelize;
sqldb.Sequelize = Sequelize;

module.exports = sqldb;