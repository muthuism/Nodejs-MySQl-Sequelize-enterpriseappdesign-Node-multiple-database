

var postgresdb=require('../../config/dbconfig/postgresdbconfig')

 postgressequelize = postgresdb.postgressequelize,
 postgresSequelize = postgresdb.postgresSequelize;
module.exports=postgressequelize.define( 
'user',{

userid:{
type:postgresSequelize.INTEGER,
primaryKey:true,
autoIncrement:true
},
name:{
type:postgresSequelize.STRING
},
dob:{
    type:postgresSequelize.STRING
},
age:{
    type:postgresSequelize.STRING
},
address:
{
    type:postgresSequelize.STRING
}


}, {
    timestamps: false,
    tableName: 'user'
});

