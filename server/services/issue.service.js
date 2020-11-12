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
  const { is_open, milestone, author, title, label, assignee } = condition;
  const where1 = {}
  const where2 = {}
  const where3 = {}
  const where4 = {}

  if (is_open !== undefined){
    where1['is_open'] = is_open
  }
  if (milestone !== undefined){
    where4['title'] = milestone
  }
  if (author !== undefined){
    where2['github_id'] = author
  }
  if (title !== undefined){
    where1['title'] = {
      [Op.like]: `%${title}%`
    }
  }
  // if (label !== undefined){
  //   where1['$label.id$'] = labels
  // }
  if (assignee !== undefined){
    where3['github_id'] = assignee
  }

  const result = await Issue.findAll({
    attributes: ['id', 'is_open', 'title', 'created_at', 'updated_at'],
    where: where1,
    include: [
      {
        model: User,
        as: 'Author',
        where: where2,
        attributes: ['id', 'github_id'],
      },
      {
        model: User,
        as: 'Assignees',
        where: where3,
        attributes: [],
        through: {
          attributes: [],
        },
      },
      {
        model: Milestone,
        where: where4,
        attributes: ['id', 'title'],
      },
      {
        model: Label,
        attributes: ['id', 'name', 'color'],
        through: {
          attributes: [],
        },
      },
      // {
      //   model: Issue,
      //   as: 'selfJoin',
      //   attributes: ['id'],
      //   include: [
      //     {
      //       model: Label,
      //       where: {'name': 'API'},
      //       attributes: ['id', 'name', 'color'],
      //       through: {
      //         attributes: [],
      //       },
      //     },
      //   ],
      // }
    ],
    order: [['created_at', 'DESC']],
  });
  return result;
};


exports.createIssue = async (values) => {
  console.log(values)
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