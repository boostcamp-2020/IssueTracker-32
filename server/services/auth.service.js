const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.get('Authorization');
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
    if (err) {
      res.sendStatus(401);
    } else {
      req.data = data;
      next();
    }
  });
};

exports.issueToken = (req, res) => {
  jwt.sign({ id: req.user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' }, (err, token) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const frontURL =
        process.env.NODE_ENV === 'development'
          ? process.env.DEV_FRONT_SERVER
          : process.env.PRO_FRONT_SERVER;
      res.redirect(`${frontURL}/social?token=${token}`);
    }
  });
};
