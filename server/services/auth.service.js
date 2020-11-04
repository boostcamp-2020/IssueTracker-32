const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {

}

exports.issueToken = (req, res) => {
    jwt.sign(
        { id: req.user.id }, 
        process.env.JWT_SECRET_KEY, 
        {expiresIn: '1h'},
        (err, token) => {
            if(err){
                res.sendStatus(500);
            } else {
                res.status(200).json({ 'token': token });
            }
        }
    )
}