const express = require("express");
const app =express();

const fruits = [
    {title:'Apple',quantity:10},
    {title:'Banana',quantity:20},
    {title:'Orange',quantity:30}
]

app.get('/inventory',function(request, response) {
response.send(fruits);
});
app.get('/inventory/Apple',function(request, response) {
    response.send(fruits);
});

app.put('/inventory/:title',function(req,res){
    const fruit = fruits.find(c=>c.title===req.paramms.title);
    fruit.title=req.body.title;
    res.send(fruits);
});
app.put('/inventory/',function(req,res){
    const fruit={
        quantity:req.body.quantity,
    title=req.body.title
    };
    fruit.slice(0,fruits.length);
    fruits.push(fruit);
    res.send(fruits);
});
app.listen(800, function(){
    console.log("Listening to port 800");
})