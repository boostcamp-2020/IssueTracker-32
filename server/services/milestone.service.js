const db = require('../models/index');
const { Milestone } = db;
const sequelize = require("sequelize");

exports.getMilestoneCount = async () => {
    const result = await Milestone.count()
    return result
}

exports.getMilestoneList = async () => {
    const result = await Milestone.findAll()
    return result
}

exports.createMilestone = async (values) => {
	const result = await Milestone.create(values);
	return result;
};
  
exports.updateMilestone = async (id, values) => {
	const result = await Milestone.update(values, {
		where: {
			id
		}
	});
	return result;
};

exports.deleteMilestone = async (id) => {
	const result = await Milestone.destroy({
		where: {
			id
		}
	});
	return result;
};