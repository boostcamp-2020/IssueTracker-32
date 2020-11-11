const express = require('express');
const router = express.Router();

const authService = require('../services/auth.service');
const milestoneController = require('../controllers/milestone.controller');

router.get('/', authService.verifyToken, milestoneController.getMilestoneList);
router.post('/', authService.verifyToken, milestoneController.createMilestone)
router.put('/', authService.verifyToken, milestoneController.updateMilestone)
router.delete('/', authService.verifyToken, milestoneController.deleteMilestone)

router.get('/count', authService.verifyToken, milestoneController.getMilestoneCount);


module.exports = router;
