const db = require('../models/index');
const { Issue, User, Milestone, Label, Comment } = db;
const { Op } = require("sequelize");

exports.getIssueList = async () => {
  try {
    const result = await Issue.findAll({
      include: [
        {
          model: User,
          as: 'Author',
          attributes: ['id', 'github_id'],
        },
        {
          model: User,
          as: 'Assignees',
          attributes: ['id', 'github_id'],
          through: {
            attributes: [],
          },
        },
        {
          model: Milestone,
          attributes: ['title'],
        },
        {
          model: Label,
          attributes: ['id', 'name', 'color'],
          through: {
            attributes: [],
          },
        },
      ],
      where: {
        is_open: 1
      },
      order: [['created_at', 'DESC']]
    });
    return result;
  }
  catch(err) {
    console.log(err)
  }
};

exports.getIssueListByFilter = async (condition) => {
  const { id, is_open, milestone_id, author_id, title, labels, assignee } = condition;
  const where1 = {}
  const where2 = {}
  if (id !== undefined){
    where1['id'] = id
  }
  if (is_open !== undefined){
    where1['is_open'] = is_open
  }
  if (milestone_id !== undefined){
    where1['milestone_id'] = milestone_id
  }
  if (author_id !== undefined){
    where1['author_id'] = author_id
  }
  if (title !== undefined){
    where1['title'] = {
      [Op.like]: `%${title}%`
    }
  }
  if (labels !== undefined){
    where1['$labels.id$'] = labels
  }
  if (assignee !== undefined){
    where2['id'] = assignee
  }

  const result = await Issue.findAll({
    where: where1,
    include: [
      {
        model: User,
        as: 'Author',
        attributes: ['id', 'github_id'],
      },
      {
        model: User,
        as: 'Assignees',
        where: where2,
        attributes: [],
        through: {
          attributes: [],
        },
      },
      {
        model: Milestone,
        attributes: ['title'],
      },
      {
        model: Label,
        attributes: ['id', 'name', 'color'],
        through: {
          attributes: [],
        },
      },
    ],
    order: [['created_at', 'DESC']],
  });
  return result;
};

exports.createIssue = async (values) => {
  const result = await Issue.create(values);
  return result;
};

exports.updateIssue = async (id, values) => {
  const result = await Issue.update(values, {
    where: {
      id
    }
  });
  return result;
};

exports.deleteIssue = async (id) => {
  const result = await Issue.destroy({
    where: {
      id
    }
  });
  return result;
};

exports.getIssueCountByState = async (is_open) => {
  try {
    const result = await Issue.count({
      where: {
        is_open
      }
    });
    return result;
  }
  catch(err) {
    console.log(err)
  }
};

exports.getDetailIssue = async (id) => {
  const result = await Issue.findAll({
    where: {id},
    include: [
      {
        model: User,
        as: 'Author',
        attributes: ['id', 'github_id', 'profile_img_url'],
      },
      {
        model: User,
        as: 'Assignees',
        attributes: ['id', 'github_id'],
        through: {
          attributes: [],
        },
      },
      {
        model: Milestone,
        attributes: ['title'],
      },
      {
        model: Label,
        attributes: ['id', 'name', 'color'],
        through: {
          attributes: [],
        },
      },
      {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'github_id', 'profile_img_url'],
        }],
        attributes: ['id', 'mandatory', 'detail','created_at', 'updated_at'],
        order: [['created_at', 'DESC']]
      },
    ]
  });
  return result;
}