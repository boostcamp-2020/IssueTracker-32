const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const passport = require('passport');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const db = require('./models');
db.sequelize.sync({ force: true }).then((require('./seeder/seeder')));

const passportConfig = require('./configs/passportConfig');
passportConfig.config(passport);
app.use(passport.initialize());

app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));

const logger = require('morgan');
app.use(logger('dev'));

const index = require('./routes/index');
app.use('/', index);

app.listen(port, () => {
  console.log(`listening at port ${port}...`);
});
