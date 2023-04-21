const quuanaomodel = require('../models/QuanAoModel');
const alert = require('alert')
const{multipleMongooseToObject} = require('../../ultil/mongoose')
const {mongooseToObject} = require('../../ultil/mongoose')


class QuanAoController{
async index(req , res , next){
   quuanaomodel.find({})
   .then(quanaos=>{
    quanaos = quanaos.map(quanao=>quanao.toObject())
  
    res.render('home' , {quanaos})
   }).catch(err=>next(err))
}

add(req , res , next){
const  NewQuanao = new quuanaomodel(req.body)
NewQuanao.save()
            .then(()=>res.redirect('/'))
            .catch(err=>{
            })
}

 edit(req , res , next){
   quuanaomodel.findById({_id:req.params.id})
   .then(quanaos=>{
   quanaos = mongooseToObject(quanaos)

   
    res.render('edit' , {layout:'main2' , quanaos } )

   }).catch(err=>next(err))
}
update(req , res , next){
 
 quuanaomodel.updateOne({_id:req.params.id} , req.body)
 .then(()=>res.redirect('/'))
 .catch(err=>{
 })
}
delete(req , res , next){
   quuanaomodel.deleteOne({_id:req.params.id})
   .then(()=>{res.redirect('back')})
   .catch(err=>next(err))
}
}
module.exports = new QuanAoController