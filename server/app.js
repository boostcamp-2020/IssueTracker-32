const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const db = require('./models');
db.sequelize.sync({ force: true });

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.get('/api/test', (req, res) => {
  res.json({ test: 'nginx 성공!' });
});

app.listen(port, () => {
  console.log(`listening at port ${port}...`);
});
