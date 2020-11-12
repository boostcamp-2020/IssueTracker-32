const express = require('express');
const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../configs/swagger')

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const auth = require('./auth');
router.use('/auth', auth);

const issue = require('./issue');
router.use('/issue', issue);

const label = require('./label');
router.use('/label', label);

const milestone = require('./milestone');
router.use('/milestone', milestone);

const user = require('./user');
router.use('/user', user);

const comment = require('./comment');
router.use('/comment', comment);

module.exports = router;
