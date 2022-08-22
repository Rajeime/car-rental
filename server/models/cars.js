const db = require('mongoose');

let carsSchema = new db.Schema({
        car_Type: { 
          type: String, 
          required: true 
        },

        car_Model: { 
          type: String, 
          required: true 
        },

        car_Img : {
          type: String
        },

        car_Make: { 
          type: String, 
          required: true 
        },

        car_Year: {
           type: Number, 
           required: true 
        },

        price: { 
          type: Number, 
          required: true 
        },

        times_rented: { 
          type: Number, 
          required : true 
        },

        quantity: { 
          type: Number, 
          required: true 
        },
    },
    { collection: "Cars" }
  );

module.exports = db.model('Cars', carsSchema);