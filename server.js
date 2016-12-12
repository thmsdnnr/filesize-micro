var express=require('express');
var multer=require('multer');
var upload=multer({dest:'uploads/'});
var app=express();
var path=require('path');
app.use(express.static('/'));
app.post('/submit',upload.single('upfile'),function(req,res,next){
res.send({"size":req.file.size});
res.end();
});
app.get('*',function(req,res){res.sendFile(path.join(__dirname, 'index.html'));});

app.listen(process.env.PORT||8080, function() {console.log('listening on port '+process.env.PORT||8080);});
