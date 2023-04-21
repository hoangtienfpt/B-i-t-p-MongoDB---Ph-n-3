const mongoose = require('mongoose')
const schema = mongoose.Schema;



const quanao = new schema({
    masp:{type:String},
    name:{type:String }, 
    img:{type:String},
    quantity:{type:Number },
    cost:{type:Number }

} , {timestamps:true,})
module.exports = mongoose.model('official' , quanao);