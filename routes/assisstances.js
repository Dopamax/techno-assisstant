const express = require('express');
const AssisstanceController = require('../controllers/AssisstanceController');

const router = express.Router();

//router.get('/create', AssisstanceController.createProduct);
router.get('', AssisstanceController.getAllAssisstances);
router.post('', AssisstanceController.storeAssissstance);
router.put('/:id', AssisstanceController.updateAssisstance);
//router.get('/:id/edit', AssisstanceController.editProduct)
router.get('/:id', AssisstanceController.showOneAssisstance)
router.patch('/:id', AssisstanceController.patchAssisstance)
router.delete('/:id', AssisstanceController.deleteAssisstance)

module.exports = router;