var express = require('express');
const router=express.Router()

const controller = require('../../controller/product')

router.post('/addProduct',controller.addProduct)
router.get('/getProduct',controller.getProduct)
router.delete('/deleteProduct/:Id',controller.deleteProduct)
router.put('/editProduct/:Id',controller.editProduct)

module.exports = router