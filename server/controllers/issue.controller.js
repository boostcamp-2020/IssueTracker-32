const issueService = require('../services/issue.service');

exports.getIssueList = async (req, res) => {
    const result = await issueService.getIssueList(req.query);
    res.json({data: result});
}