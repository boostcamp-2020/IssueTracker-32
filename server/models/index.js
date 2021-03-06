const { Sequelize } = require('sequelize');
const dbConfig = require('../configs/dbConfig');

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

const userModel = require('./user.model.js');
const issueModel = require('./issue.model.js');
const labelModel = require('./label.model.js');
const commentModel = require('./comment.model.js');
const milestoneModel = require('./milestone.model.js');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = userModel(sequelize, Sequelize);
db.Issue = issueModel(sequelize, Sequelize);
db.Label = labelModel(sequelize, Sequelize);
db.Comment = commentModel(sequelize, Sequelize);
db.Milestone = milestoneModel(sequelize, Sequelize);

// 마일스톤 이슈 1 : N
db.Milestone.hasMany(db.Issue, { foreignKey: 'milestone_id' });
db.Issue.belongsTo(db.Milestone, { foreignKey: 'milestone_id' });

// 유저 코멘트 1 : N
db.User.hasMany(db.Comment, { foreignKey: 'user_id' });
db.Comment.belongsTo(db.User, { foreignKey: 'user_id' });

// 이슈 코멘트 1 : N
db.Issue.hasMany(db.Comment, { foreignKey: 'issue_id' });
db.Comment.belongsTo(db.Issue, { foreignKey: 'issue_id' });

// 저자 이슈 1 : N
db.User.hasMany(db.Issue, { foreignKey: 'author_id', as: 'Author' });
db.Issue.belongsTo(db.User, { foreignKey: 'author_id', as: 'Author' });

// 어사이니 이슈 N:M
db.User.belongsToMany(db.Issue, { through: 'IssueAssignee', as: 'Issues' });
db.Issue.belongsToMany(db.User, { through: 'IssueAssignee', as: 'Assignees' });

// 이슈 레이블 N:M
db.Issue.belongsToMany(db.Label, { through: 'IssueLabel' });
db.Label.belongsToMany(db.Issue, { through: 'IssueLabel' });


// db.Issue.hasOne(db.Issue, {
//   foreignKey: 'self_id',
//   as: 'selfJoin'
// });


module.exports = db;
