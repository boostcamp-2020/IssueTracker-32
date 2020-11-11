const express = require('express');
const router = express.Router();

const authService = require('../services/auth.service');
const issueController = require('../controllers/issue.controller');

router.get('/', authService.verifyToken, issueController.getIssueList);
router.get('/count', authService.verifyToken, issueController.getIssueCount);
router.get('/:id', authService.verifyToken, issueController.getDetailIssue)
router.post('/', authService.verifyToken, issueController.createIssue)
router.put('/', authService.verifyToken, issueController.updateIssue)
router.delete('/', authService.verifyToken, issueController.deleteIssue)

module.exports = router;
