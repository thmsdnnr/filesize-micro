var express=require('express');
var app=express();
app.get('/',function(req,res){
res.send('hello world');
});
app.listen(process.env.PORT||8080, function() {console.log('listening on port '+process.env.PORT||8080);});