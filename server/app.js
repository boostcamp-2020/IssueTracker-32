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

app.get('/auth/github', passport.authenticate('github'))
app.get('/auth/github/callback', passport.authenticate('github', {session : false}), (req, res) => {
  res.json(req.user);
});

app.listen(port, () => {
  console.log(`listening at port ${port}...`);
});
