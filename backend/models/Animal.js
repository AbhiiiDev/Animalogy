const mongoose=require('mongoose');


const animalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    species:{
        type:String,
        required:true,
    },
    breed:{
        type:String,
    },
    famousTrait:{
        type:String,    
    }
    ,
    age:{
        type:String,
        required:true,
    }
})

const Animal=mongoose.model('Animal',animalSchema);

module.exports=Animal;