module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'label',
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(100),
      },
      color: {
        type: DataTypes.STRING(10),
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
