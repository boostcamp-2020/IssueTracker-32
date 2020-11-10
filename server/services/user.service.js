const db = require('../models/index');
const { User } = db;
const sequelize = require("sequelize");

exports.getUserList = async () => {
    const result = await User.findAll({
        attributes: ['id', 'github_id', 'nickname', 'profile_img_url']
    })
    return result
}
