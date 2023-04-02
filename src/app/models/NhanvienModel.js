const mongoose = require('mongoose')
const schema = mongoose.Schema;



const nhanvien = new schema({
    name:{type:String}, 
    adress:{type:String},
    salary:{type:Number},

} , {timestamps:true,})
module.exports = mongoose.model('staff' , nhanvien);