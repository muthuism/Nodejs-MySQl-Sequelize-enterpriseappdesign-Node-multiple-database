const sqldb=require('./src/config/dbconfig/sqldbconfig')
const postgresdb=require('./src/config/dbconfig/postgresdbconfig')
const server =require('./src/config/appconfig/serverconfig')
const mongodb=require('./src/config/dbconfig/mongodbConfig')


sql = sqldb.sequelize;
postgres = postgresdb.postgressequelize;
   
new server().returnServer();   
     
sql.authenticate()
.then(() =>console.log('MySqlDataBase Connected'))
.catch(err =>console.log('Error:'+err))

postgres.authenticate()
.then(() =>console.log('postgresDataBase Connected'))
.catch(err =>console.log('Error:'+err))

mongodb.on('error', console.error.bind(console, 'MongoDB connection error:'))
.then(() =>console.log('MongoDB Connected'));