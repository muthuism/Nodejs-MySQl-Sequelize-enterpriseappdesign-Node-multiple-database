const sqldb=require('./src/config/dbconfig/sqldbconfig')
const server =require('./src/config/appconfig/serverconfig')


sequelize = sqldb.sequelize;
   
new server().returnServer();   
     
sequelize.authenticate()
.then(() =>console.log('MySqlDataBase Connected'))
.catch(err =>console.log('Error:'+err))

