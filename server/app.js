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

db.sequelize.sync({ force: true });

const passportConfig = require('./configs/passportConfig');

passportConfig.config(passport);
app.use(passport.initialize());

const authService = require('./services/auth.service');

app.get('/', authService.verifyToken, (req, res) => {
  res.send(req.data);
});

const index = require('./routes/index');
app.use('/', index);

app.listen(port, () => {
  console.log(`listening at port ${port}...`);
});
