const db = require('../models/index');
const { Issue, User, Milestone, Label, Comment } = db;
const { Op } = require("sequelize");

const found = function(arr, st){
  console.log(arr,st)
  if (st.isArray){
    return st.every( r=> arr.indexOf(r) >= 0)
  }
  else {
    return arr.includes(st)
  }
}

exports.getIssueList = async () => {
  try {
    const result = await Issue.findAll({
      attributes: ['id', 'is_open', 'title', 'created_at', 'updated_at'],
      include: [
        {
          model: User,
          as: 'Author',
          attributes: ['id', 'github_id'],
        },
        {
          model: User,
          as: 'Assignees',
          attributes: [],
          through: {
            attributes: [],
          },
        },
        {
          model: Milestone,
          attributes: ['id','title'],
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
  const where = {}
  if (is_open !== undefined){
    where['is_open'] = parseInt(is_open)
  }
  if (milestone !== undefined){
    where['$milestone.title$'] = milestone
  }
  if (author !== undefined){
    where['$Author.github_id$'] = author
  }
  if (title !== undefined){
    where['title'] = {
      [Op.like]: `%${title}%`
    }
  }
  if (assignee !== undefined){
    where['$Assignees.github_id$'] = assignee
  }
  try {
    const result = await Issue.findAll({
      attributes: ['id', 'is_open', 'title', 'created_at', 'updated_at'],
      include: [
        {
          model: User,
          as: 'Author',
          attributes: ['id', 'github_id'],
        },
        {
          model: User,
          as: 'Assignees',
          attributes: [],
          through: {
            attributes: [],
          },
        },
        {
          model: Milestone,
          attributes: ['id', 'title'],
        },
        {
          model: Label,
          attributes: ['id', 'name', 'color'],
          through: {
            attributes: [],
          },
        },
      ],
      where,
      order: [['created_at', 'DESC']],
    });

    if (label === undefined){
      return result
    }
    else {
      const filteredByLabel = result.reduce((acc,cur) => {
        const label_name_list = cur.labels.reduce((acc,cur) => {
          acc.push(cur.name)
          return acc
        },[])
        console.log(found(label_name_list,label))
        if (found(label_name_list,label)){
          acc.push(cur)
        }
        return acc
      },[])
      return filteredByLabel
    }
  }
  catch(err) {
    console.log(err)
  }
  

  
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