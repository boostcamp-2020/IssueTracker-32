const issueService = require('../services/issue.service');

exports.getIssueList = async (req, res) => {
    const condition = req.query
    if (Object.keys(condition).length === 0) {
        const result = await issueService.getIssueList(condition);    
        res.json({data: result});
    }
    else {
        const result = await issueService.getIssueListByFilter(condition);
        res.json({data: result});
    };
}


exports.createIssue = async (req, res) => {
    const values = req.body
    const result = await issueService.createIssue(values);
    res.json({data: result});
}

exports.updateIssue = async (req, res) => {
    const {id, ...values} = req.body
    const result = await issueService.updateIssue(id, values);
    res.json({msg: 'success'});
}

exports.deleteIssue = async (req, res) => {
    const {id} = req.body
    const result = await issueService.deleteIssue(id);
    res.json({result: 'success'});
}

exports.getIssueCount = async (req, res) => {
    const result1 = await issueService.getIssueCountByState(0);    
    const result2 = await issueService.getIssueCountByState(1);
    const result = {
        open: result1,
        close: result2
    }
    res.json({data: result});
}


exports.getDetailIssue = async (req, res) => {
    const id = req.params.id
    const result = await issueService.getDetailIssue(id);
    res.json({data: result});
}