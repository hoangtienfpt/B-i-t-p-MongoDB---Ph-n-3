const  path = require('path')
const express  = require('express')
const handlebars = require('express-handlebars')
const port = 3000
const app = express()
const roter = require('./router/index')
const db = require('./confix/db/index')
const methodOverride =require('method-override') 


app.listen(port , ()=>{console.log(`Application started and Listening on port ${port}`)})
db.connect();
app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(methodOverride('_method'))


    app.engine('hbs' , handlebars.engine({extname:"hbs" , 
    helpers:{
        sum:(a , b) => a+b
    }
    })
    )


    app.set('view engine' , 'hbs');
    app.set('views' , path.join(__dirname , 'views'));


roter(app)

