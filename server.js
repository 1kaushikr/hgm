const express = require("express");
const app = express();
app.get("/",function(request,respone){
  respone.send("sdk");
});
app.listen(3000,function(){
  console.log("Server Started at 3000");
});
