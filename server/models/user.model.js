
module.exports = (sequelize , DataTypes)=> sequelize.define('user', {
    nickname: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
	email: {
      type: DataTypes.STRING(50),
    },
	password: {
      type: DataTypes.STRING(255),
    },
    github_id: {
      type: DataTypes.STRING(50)
    }
  }, {
    timestamps: false,
});