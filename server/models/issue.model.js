module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'issue',
    {
      is_open: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(100),
      },
    },
    {
      timestamps: true,
      underscored: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );
