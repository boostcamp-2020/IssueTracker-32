const db = require('../models/index');
const { Comment } = db;

exports.createComment = async (values) => {
  const result = await Comment.create(values);
  return result;
};

exports.updateComment = async (id, values) => {
  const result = await Comment.update(values, {
    where: {
      id
    }
  });
  return result;
};

exports.deleteComment = async (id) => {
  const result = await Comment.destroy({
    where: {
      id
    }
  });
  return result;
};