const Cars = require('../models/cars')

//get all cars from database
const getAllCars =  async (req, res)=> {
    try{
        let car = await Cars.find();
        res.status(200).json(car)

    }catch(error){
        res.status(400).json({message: "Cannot find car collection"})
    }
}

//post request to add cars to database
const postCar = async (req, res)=>{  
    try{
        let car = await Cars.create(req.body)
        res.status(201).json(car)
        
    }catch(error){
        res.status(404).json({message:error});
        console.log(error)
    }
}


module.exports = {
    getAllCars,
    postCar
}