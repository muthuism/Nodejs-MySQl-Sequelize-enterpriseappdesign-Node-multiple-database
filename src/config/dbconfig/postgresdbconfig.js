const postgresSequelize= require('sequelize');
var postgresdb = {};
const postgressequelize=new postgresSequelize('appbook','postgres','root',{
host:"localhost",
port:5432,
dialect: 'postgres',
operatorsAliases :false,

pool:{
    max:5,min:0,
    acquire:30000,
    idle:10000
},

});

postgresdb.postgressequelize = postgressequelize;
postgresdb.postgresSequelize = postgresSequelize;

module.exports = postgresdb;