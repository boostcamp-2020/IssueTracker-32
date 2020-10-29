const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 3000;

dotenv.config({ path: path.resolve(__dirname, '../.env') });
const sequelize = require('./models');

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(port, () => {
  console.log(`listening at port ${port}...`);
});
