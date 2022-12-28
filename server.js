const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
const port=3000;

app.listen(port,function(){
    console.log("Server is running on port:"+port);
});

app.get('/',function(req,res){
    res.sendFile(__dirname+'/bmi_form/index.html');
});

app.post('/',function(req,res){
    let weight=Number(req.body.weight);
    let height=Number(req.body.height);
    let bmi=weight/(height*height);
    res.send("Your BMI is "+bmi);
});