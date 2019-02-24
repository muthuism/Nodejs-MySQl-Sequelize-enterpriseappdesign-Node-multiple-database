const mongoose = require('mongoose')
var mongourl='mongodb://localhost:27017/local';
mongoose.connect(mongourl) 
mongoose.Promise = global.Promise;
var mongodb=mongoose.connection;
module.exports= mongodb;