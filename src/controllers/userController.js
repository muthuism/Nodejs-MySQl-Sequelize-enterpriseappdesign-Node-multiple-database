const express = require('express')
var router = express.Router();
var bodyParser = require('body-parser');
const userModel =require('../models/mysqlmodels/userModel')
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/user', (req,res) =>
userModel.findAll({})
.then(user =>{console.log(user)
res.send(user)})
    .catch(err =>console.log(err)));
    module.exports = router;