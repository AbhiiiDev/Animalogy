const express=require('express');
const { AnimalRoutes } = require('./routes');
const {connectDb}=require('./config/db')
require('dotenv').config();

const PORT=process.env.PORT;

const app=express();

app.use(express.json());

app.get('/health',(req,res)=>{
res.send("server is working fine");
})


app.use('/api/v1/animals',AnimalRoutes);

connectDb();

app.listen(PORT,()=>{
console.log(`server listening on port:${PORT}`);
});

