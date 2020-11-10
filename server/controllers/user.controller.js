const userService = require('../services/user.service');

exports.getUserList = async (req, res) => {
    const result = await userService.getUserList();
    res.json({data: result});
}