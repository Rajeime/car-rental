const db = require('mongoose');

let registerUserSchema = new db.Schema({
	email:{ 
        type : String, 
        required: true 
    },

	password:{ 
        type : String, 
        required: true 
    },

    name:{ 
        type : String , 
        required:true 
    },

    bankAccountNumber:{
        type : Number 
    }
},
{ collection: "registerUser" }
)

module.exports = db.model('registerUser',registerUserSchema )