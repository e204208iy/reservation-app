const express =require('express')
const router = express.Router()
const products = require('../model/products')

router.get('', function(req,res){
    products.find({}, function(err, fonundProduct) {
        return res.json(fonundProduct)
    })
})
router.get('/:productId', function(req,res){
    const productId = req.params.productId
    products.findById(productId, function(err, fonundProduct) {
        if(err) {
            return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
        }
        return res.json(fonundProduct)
    })
})

module.exports = router