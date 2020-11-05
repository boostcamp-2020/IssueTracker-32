const express = require('express');
const router = express.Router();
const passport = require('passport');

const authService = require('../services/auth.service');

router.get('/github', passport.authenticate('github'));

router.get(
  '/github/callback',
  passport.authenticate('github', { session: false }),
  authService.issueToken,
);

module.exports = router;
