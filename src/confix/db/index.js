const  mongoose = require('mongoose')



async function connect (){
    try {
        await mongoose.connect('mongodb+srv://tienqhph27776:inQUGYlHKO5wa8B8@tienne.rk9nwsz.mongodb.net/QuanLi_QuanAo?retryWrites=true&w=majority' , {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('connect sucsessfully')
    } catch (error) {
        console.log('connect faild')
    }
}
module.exports = {connect}