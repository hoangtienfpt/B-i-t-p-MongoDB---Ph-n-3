const quanaorouter = require('./quanaorouter')


function routefunction(app){
    app.get('/them' , (req , res)=>{
        res.render('layoutAdd_sua' , {layout:'main2'})
    })

    app.use('/' , quanaorouter)


    

}
module.exports = routefunction