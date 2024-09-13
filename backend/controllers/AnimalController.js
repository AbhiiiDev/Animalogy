const Animal = require("../models/Animal");

const getAnimals=async(req,res)=>{
try {
    const animals=await Animal.find();
    if(!animals)
        return res.status(404).json({message:"No animals found"});
    res.status(200).json({data:animals,message:"Animal fetched successfully"});
} catch (error) {
    res.status(400).json({message:error.message});
}

}

const createAnimal=async(req,res)=>{
    const animal=new Animal({
        name:req.body.name,
        species:req.body.species,
        age:req.body.age,
        breed:req.body.breed,
    })

    try {
        const newAnimal=await animal.save();
        res.status(201).json({message:"Animal created successfully"});
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const updateAnimal=async(req,res)=>{

    try {
        const animal=await Animal.findById(req.params.id);
        if(!animal)
            return res.status(404).json({message:"Can not find animal you requested"});

        animal.name=req.body.name  || animal.name;
        animal.species=req.body.species || animal.species;
        animal.breed=req.body.breed || animal.breed;
        animal.age=req.body.age || animal.age;

     const updatedAnimal= await animal.save();
        res.json({data:updatedAnimal,message:"Successfully deleted animal"});
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const deleteAnimal=async(req,res)=>{
    try {
        const animal=await Animal.findById(req.params.id);
        if(!animal)
            return res.status(404).json({message:"Can not find animal you requested"});

        await animal.remove();
        res.json({message:"Successfully deleted animal"});
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports={
    getAnimals,
    createAnimal,deleteAnimal,updateAnimal
}