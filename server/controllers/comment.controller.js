const commentService = require('../services/comment.service');

exports.createComment = async (req, res) => {
    const values = req.body
    const result = await commentService.createComment(values);
    res.json({data: result});
}

exports.updateComment = async (req, res) => {
    const {id, ...values} = req.body
    const result = await commentService.updateComment(id, values);
    res.json({msg: 'success'});
}

exports.deleteComment = async (req, res) => {
    const {id} = req.body
    const result = await commentService.deleteComment(id);
    res.json({result: 'success'});
}