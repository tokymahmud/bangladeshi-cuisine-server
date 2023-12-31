const express =require('express');
const app = express();
const port =process.env.PORT || 5000;
const cors =require('cors');

const chef = require('./data/chef.json');

app.use(cors());
app.get('/',(req,res)=>{
    res.send('chef is running')
});
app.get('/chef',(req,res)=>{
    res.send(chef)
});

app.get('/chef/:id',(req, res)=>{
    const id =req.params.id;
    const result = chef.find((data)=>data.id==id)
    res.send(result)
    
})

app.listen(port,()=>{
    console.log(`cheif/recipie api is running on port: ${port}`)
})