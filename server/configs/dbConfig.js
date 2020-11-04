const dbconfigs = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_DATABASE,
    host: process.env.DEV_DB_HOSTNAME,
    dialect: process.env.DEV_DB_DIALECT,
  },
  production: {
    username: process.env.PRO_DB_USERNAME,
    password: process.env.PRO_DB_PASSWORD,
    database: process.env.PRO_DB_DATABASE,
    host: process.env.PRO_DB_HOSTNAME,
    dialect: process.env.PRO_DB_DIALECT,
  },
};

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = dbconfigs[mode];
