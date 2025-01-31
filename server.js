const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000 , ()=>{
    console.log("server started at port 3000")
});

app.get('/' , (req , res)=>{
    res.send("hello je kaise ho")
});

app.post('/api/cars' , (req , res)=>
{
    const {name , brand} = req.body;
    console.log(name)
    console.log(brand)

    res.send("car sumbitted succesfully") 
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase',{
    useNewUrlParser : true,
    useUnifiedTopology:true
})
.then(()=>{console.log('connection successfull')})
.catch(()=>{console.log('received an error')});

