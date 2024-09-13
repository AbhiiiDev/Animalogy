const express=require('express');
const { AnimalController } = require('../controllers');

const router=express.Router();

router.get('/',AnimalController.getAnimals);
router.post('/',AnimalController.createAnimal);
router.put('/:id',AnimalController.updateAnimal);
router.delete('/:id',AnimalController.deleteAnimal);

module.exports=router;