const db = require('../models/index');
const { Label } = db;
const sequelize = require("sequelize");

exports.getLabelCount = async () => {
	const result = await Label.count()
	return result
}

exports.getLabelList = async () => {
	const result = await Label.findAll()
	return result
}

exports.createLabel = async (values) => {
	const result = await Label.create(values);
	return result;
};

exports.updateLabel = async (id, values) => {
	const result = await Label.update(values, {
		where: {
			id
		}
	});
	return result;
};
  
exports.deleteLabel = async (id) => {
	const result = await Label.destroy({
		where: {
			id
		}
	});
	return result;
};