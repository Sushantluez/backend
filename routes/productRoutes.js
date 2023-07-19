const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const checkfile = require('../middleware/filecheck')
const checks = require('../middleware/checkUser')


router.get('/', checkfile.fileCheck, productController.getAllProducts);
router.get('/api/product/:id', productController.getAllProducts);

router.post('/api/add/product', checks.checkAdmin, checkfile.fileCheck, productController.addProduct);
router.patch('/api/add/product/:id', checks.checkAdmin, checkfile.updateFileCheck, productController.updateProduct);


router.delete('/api/remove/product/:id', checks.checkAdmin, productController.removeProduct);


module.exports = router;