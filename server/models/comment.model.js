module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'comment',
    {
      mandatory: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      detail: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      underscored: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );
