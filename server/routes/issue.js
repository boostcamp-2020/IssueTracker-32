const express = require('express');
const router = express.Router();

const authService = require('../services/auth.service');
const issueController = require('../controllers/issue.controller');

router.get('/', authService.verifyToken, issueController.getIssueList);

module.exports = router;
