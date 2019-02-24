const express = require('express')
var router = express.Router();
var bodyParser = require('body-parser');
const userModel =require('../models/mysqlmodels/userModel')
const postgresuserModel =require('../models/postgresmodels/postgresuserModel')
const usermongoModel =require('../models/mongo/usermongoModel')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.get('/user', (req,res) =>
userModel.findAll({})
.then(user =>{console.log(user)
res.send(user)})
    .catch(err =>console.log(err)));
  

    router.get('/postgresuser', (req,res) =>
    postgresuserModel.findAll({})
    .then(user =>{console.log(user)
    res.send(user)})
        .catch(err =>console.log(err)));


        router.get('/mongosuser', (req,res) =>
        usermongoModel.find({}, function(err, docs) {
            if (!err){ 
                res.send(docs)
                process.exit();
            } else {throw err;}
        }))
               
module.exports = router;    