const express = require('express');
const router = express.Router();

const authService = require('../services/auth.service');
const issueController = require('../controllers/issue.controller');

router.get('/', authService.verifyToken, issueController.getIssueList);
router.post('/', authService.verifyToken, issueController.createIssue)

router.get('/count', authService.verifyToken, issueController.getIssueCount);

router.get('/:id', authService.verifyToken, issueController.getDetailIssue)
router.put('/:id', authService.verifyToken, issueController.updateIssue)
router.delete(':id/', authService.verifyToken, issueController.deleteIssue)


module.exports = router;
