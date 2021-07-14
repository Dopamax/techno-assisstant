const express = require('express');
const TechnologieController = require('../controllers/TechnologieController');

const router = express.Router();

//router.get('/create', CategoryController.createCategory);
router.get('', TechnologieController.getAllTechnologies);
router.post('', TechnologieController.storeTechnologie);
router.put('/:id', TechnologieController.updateTechnologie);
//router.get('/:id/edit', CategoryController.editCategory)
router.get('/:id', TechnologieController.showOneTechnologie)
router.patch('/:id', TechnologieController.patchTechnologie)
router.delete('/:id', TechnologieController.deleteTechnologie)

module.exports = router;