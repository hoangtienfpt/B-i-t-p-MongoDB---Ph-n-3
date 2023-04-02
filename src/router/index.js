const nhanvienrouter = require('./nhanvienrouter')


function routefunction(app){
    app.get('/them' , (req , res)=>{
        res.render('layoutAdd_sua' , {layout:'main2'})
    })

    app.use('/' , nhanvienrouter)


    

}
module.exports = routefunction