const labelService = require('../services/label.service');

exports.getLabelCount = async (req, res) => {
	const result = await labelService.getLabelCount();
	res.json({data: result});
}

exports.getLabelList = async (req, res) => {
	const result = await labelService.getLabelList();
	res.json({data: result});
}

exports.createLabel = async (req, res) => {
    const values = req.body
    const result = await labelService.createLabel(values);
    res.json({data: result});
}

exports.updateLabel = async (req, res) => {
	const {id, ...values} = req.body
	const result = await labelService.updateLabel(id, values);
	res.json({msg: 'success'});
}

exports.deleteLabel = async (req, res) => {
	const {id} = req.body
	const result = await labelService.deleteLabel(id);
	res.json({result: 'success'});
}