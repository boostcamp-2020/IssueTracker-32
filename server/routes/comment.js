const express = require('express');
const router = express.Router();

const authService = require('../services/auth.service');
const commentController = require('../controllers/comment.controller');

router.post('/', authService.verifyToken, commentController.createComment)
router.put('/:{id}', authService.verifyToken, commentController.updateComment)
router.delete('/:{id}', authService.verifyToken, commentController.deleteComment)

module.exports = router;
