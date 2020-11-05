const db = require('../models/index');
const { Issue, User, Milestone, Label } = db;

exports.getIssueList = async (condition) => {
    const result = await Issue.findAll({
        include: [
            {
                model: User,
                attributes: ['github_id']
            },
            {
                model: Milestone,
                attributes: ['title']
            },
            {
                model: Label,
                attributes: ['id', 'name', 'color'],
                through: {
                    attributes: []
                }
            }
        ]
    })
    return result;
}