const express  = require('express')
const router = express.Router()
const QuanAoController = require('../app/controller/QuanAoController')

router.post('/add' , QuanAoController.add)
router.get('/:id' , QuanAoController.edit)
router.put('/:id/edit' , QuanAoController.update)
router.delete('/:id/delete' , QuanAoController.delete)
router.get('/'  , QuanAoController.index)



module.exports = router