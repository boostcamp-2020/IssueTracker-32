
module.exports = (sequelize , DataTypes)=> sequelize.define('milestone', {
    is_open: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
	title: {
      type: DataTypes.STRING(100),
    },
	description: {
      type: DataTypes.TEXT,
    },
	due_date: {
      type: DataTypes.DATE,
    },
  }, {
    timestamps: true,
	paranoid : true,
	underscored: true,
	charset: 'utf8',
    collate: 'utf8_general_ci',
});
