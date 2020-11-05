const express = require('express');
const router = express.Router();

const auth = require('./auth');
router.use('/auth', auth);

const issue = require('./issue');
router.use('/issue', issue);

module.exports = router;