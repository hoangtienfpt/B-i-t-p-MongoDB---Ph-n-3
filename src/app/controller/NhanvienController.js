const nhanvienmodel = require('./../models/NhanvienModel');
const alert = require('alert')
const{multipleMongooseToObject} = require('./../../ultil/mongoose')
const {mongooseToObject} = require('./../../ultil/mongoose')


class NhanvienController{
async index(req , res , next){
   nhanvienmodel.find({})
   .then(nhanviens=>{
    nhanviens = nhanviens.map(nhanvien=>nhanvien.toObject())
  
    res.render('home' , {nhanviens})
   }).catch(err=>next(err))
}

add(req , res , next){
const  newNhanvien = new nhanvienmodel(req.body)
newNhanvien.save()
            .then(()=>res.redirect('/'))
            .catch(err=>{
            })
}

 edit(req , res , next){
   nhanvienmodel.findById({_id:req.params.id})
   .then(nhanviens=>{
   nhanviens = mongooseToObject(nhanviens)

   
    res.render('edit' , {layout:'main2' , nhanviens } )

   }).catch(err=>next(err))
}
update(req , res , next){
 
 nhanvienmodel.updateOne({_id:req.params.id} , req.body)
 .then(()=>res.redirect('/'))
 .catch(err=>{
 })
}
delete(req , res , next){
   nhanvienmodel.deleteOne({_id:req.params.id})
   .then(()=>{res.redirect('back')})
   .catch(err=>next(err))
}
}
module.exports = new NhanvienController