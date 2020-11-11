const express = require('express');
const router = express.Router();

const authService = require('../services/auth.service');
const labelController = require('../controllers/label.controller');

router.get('/', authService.verifyToken, labelController.getLabelList);
router.post('/', authService.verifyToken, labelController.createLabel)
router.put('/', authService.verifyToken, labelController.updateLabel)
router.delete('/', authService.verifyToken, labelController.deleteLabel)

router.get('/count', authService.verifyToken, labelController.getLabelCount);

module.exports = router;
