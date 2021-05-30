const express = require('express');
const productCtrl = require('../controllers/product');
const router = express.Router();
const auth = require('../middelwares/auth');

router.get('/', auth, productCtrl.getProducts);
router.get('/:id', auth, productCtrl.getProduct);
router.post('/', auth, productCtrl.saveProduct);
router.put('/:id', auth, productCtrl.updateProduct);
router.delete('/:id', auth, productCtrl.deleteProduct);

module.exports = router;