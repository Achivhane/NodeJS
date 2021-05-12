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
app.listen(800, function(){
    console.log("Listening to port 800");
})