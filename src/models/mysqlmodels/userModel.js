

var sqldb=require('../../config/dbconfig/sqldbconfig')

sequelize = sqldb.sequelize,
Sequelize = sqldb.Sequelize;
module.exports=sequelize.define( 
'user',{

userid:{
type:Sequelize.INTEGER,
primaryKey:true,
autoIncrement:true
},
name:{
type:Sequelize.STRING
},
dob:{
    type:Sequelize.STRING
},
age:{
    type:Sequelize.STRING
},
address:
{
    type:Sequelize.STRING
}


}, {
    timestamps: false,
    tableName: 'user'
});

