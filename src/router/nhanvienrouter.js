const express  = require('express')
const router = express.Router()
const NhanvienController = require('./../app/controller/NhanvienController')

router.post('/add' , NhanvienController.add)
router.get('/:id' , NhanvienController.edit)
router.put('/:id/edit' , NhanvienController.update)
router.delete('/:id/delete' , NhanvienController.delete)
router.get('/'  , NhanvienController.index)



module.exports = router