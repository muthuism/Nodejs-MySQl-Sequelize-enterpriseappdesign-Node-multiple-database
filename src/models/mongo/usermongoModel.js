const mongoose = require("mongoose")
let userSchema = mongoose.Schema;
let usermodelSchema = new userSchema({
  
        name:{
        type:String,
        
    }  , 
    dob:{
        type:String,
        
    },
    
    address:{
        type:String,
       
    },
    
    age:{
        type:Number,
        
    },
    
    qualification:{
        type:String,
       
    }
    
    
    }, { collection: 'person' })

let usermongoModel = mongoose.model('person', usermodelSchema )
module.exports=usermongoModel;