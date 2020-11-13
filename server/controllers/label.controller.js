const labelService = require('../services/label.service');

exports.getLabelCount = async (req, res) => {
	const result = await labelService.getLabelCount();
	res.json(result);
}

exports.getLabelList = async (req, res) => {
	const result = await labelService.getLabelList();
	res.json(result);
}

exports.createLabel = async (req, res) => {
    const values = req.body
    const result = await labelService.createLabel(values);
    res.json(result);
}

exports.updateLabel = async (req, res) => {
	const id = req.params.id
	const values = req.body
	const result = await labelService.updateLabel(id, values);
	res.json({msg: 'success'});
}

exports.deleteLabel = async (req, res) => {
	const id = req.params.id
	const result = await labelService.deleteLabel(id);
	res.json({msg: 'success'});
}