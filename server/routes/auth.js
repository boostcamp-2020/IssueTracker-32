const express = require('express');
const router = express.Router();

router.get('/github', passport.authenticate('github'));

router.get(
  '/github/callback',
  passport.authenticate('github', { session: false }),
  authService.issueToken,
);

module.exports = router;
