const milestoneService = require('../services/milestone.service');

exports.getMilestoneCount = async (req, res) => {
	const result = await milestoneService.getMilestoneCount();
	res.json(result);
}

exports.getMilestoneList = async (req, res) => {
	const result = await milestoneService.getMilestoneList();
	res.json(result);
}

exports.createMilestone = async (req, res) => {
	const values = req.body
	const result = await milestoneService.createMilestone(values);
	res.json(result);
}

exports.updateMilestone = async (req, res) => {
	const {id, ...values} = req.body
	const result = await milestoneService.updateMilestone(id, values);
	res.json({msg: 'success'});
}

exports.deleteMilestone = async (req, res) => {
	const {id} = req.body
	const result = await milestoneService.deleteMilestone(id);
	res.json({msg: 'success'});
}