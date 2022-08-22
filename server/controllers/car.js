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
    // let Data = {
    //     car_Model: "Accord",
    //     car_Make : "Honda",
    //     car_Year : 2010,
    //     price: 123456,
    //     times_rented : 3,
    //     quantity: 4
    // }
        let Data = {
            car_Type : "standard",
            car_Model: "Accord",
            car_Img:"/assets/background.png",
            car_Make: "Honda",
            car_Year: 2002,
            price: 1234,
            times_rented: 1,
            quantity: 3
    }
    try{
        const car = await Cars.create(Data)
        res.status(201).json(car)
        
    }catch(error){
        res.status(404).json({message:error});
        console.log(error)
    }
}


// const postCar2 = async (req, res) => {
 
//     const carModel = new Cars({
//         car_Model: req.body.car_Model,
//         car_Make : req.body.car_Make,
//         car_Year : req.body.car_Year,
//         price: req.body.price,
//         times_rented : req.body.times_rented,
//         quantity: req.body.quantity
//     });
 
//     const savedCar = await carModel.save();
 
//     res.json(savedCar);
//  };


module.exports = {
    getAllCars,
    postCar
}