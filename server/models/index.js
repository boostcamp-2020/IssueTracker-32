const { Sequelize, DataTypes } = require('sequelize')
const dbEnv = require('../config/mysqlConfig')

const sequelize = new Sequelize(dbEnv.database, dbEnv.user, dbEnv.password, {
	host: dbEnv.host,
	dialect: 'mysql',
})

const modelDefiners = [ require('./models/user.model'), 
require('./models/category.model'), 
require('./models/paymentMethod.model'), 
require('./models/transaction.model')]

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize, DataTypes)
}

sequelize.models.user.hasMany(sequelize.models.transaction)
sequelize.models.user.hasMany(sequelize.models.paymentMethod)

module.exports = sequelize
