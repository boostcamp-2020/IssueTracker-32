const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../configs/dbConfig').development;

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
	host: dbConfig.host,
	dialect: dbConfig.dialect,
});

const modelDefiners = []

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize, DataTypes)
};

module.exports = sequelize;
