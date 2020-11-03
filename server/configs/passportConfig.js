const db = require('../models/index');
const User = db.User;

exports.config = passport => {
  const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
  const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
  
  const GitHubStrategy = require('passport-github').Strategy;
  
  passport.use(
    new GitHubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/github/callback'
      },
      async(accessToken, refreshToken, profile, done) => {
        try {
          const user = await User.findOne({ where: { github_id : profile.id } });
		      if (user) {
            return done(null, user);
          } else {
            const newUserData = {
      	      nickname: profile.displayName,
              email: profile.emails[0].value,
              github_id: profile.username,
              profile_img_url: profile._json.avatar_url
      	    };
            const newUser = await User.create(newUserData);
      	    return done(null, newUser);
          }
        } catch(error) {
          return done(error);
        }
      }
    )
  );
};
