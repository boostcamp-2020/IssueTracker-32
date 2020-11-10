const express = require('express');
const router = express.Router();

const authService = require('../services/auth.service');
const userController = require('../controllers/user.controller');

router.get('/', authService.verifyToken, userController.getUserList);

module.exports = router;
