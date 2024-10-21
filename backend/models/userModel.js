const mongoose = require("mongoose");

// Creat schema for user
// Schema only define the structure of your document 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    age: {
        type: Number,
    },
},
    { timestamps: true}

)

//To use our schema definition, we need to convert our blogSchema into a Model 
// we can work with. To do so, we pass it into mongoose.model(modelName, schema):

// now create Model
const User = mongoose.model('User', userSchema)

module.exports = User;