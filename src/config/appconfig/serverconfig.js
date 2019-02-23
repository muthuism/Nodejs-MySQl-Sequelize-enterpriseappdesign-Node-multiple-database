const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
module.exports=class server {
returnServer(){
  var app=express();
   const PORT=process.env.PORT||5000;
app.use(bodyParser.json())
app.use(cors())

const appbook=require("../../controllers/userController")
app.use("/appbook",appbook)
   app.listen(PORT,console.log(`server started On Port ${PORT}`))
   
    
   
   return "appbook started";
}
}

 
