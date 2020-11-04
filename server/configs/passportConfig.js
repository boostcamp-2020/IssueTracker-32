const db = require('../models/index');
const User = db.User;

exports.config = passport => {
  const GITHUB_CLIENT_ID = (process.env.NODE_ENV === 'development') ? process.env.DEV_GITHUB_CLIENT_ID : process.env.PRO_GITHUB_CLIENT_ID;
  const GITHUB_CLIENT_SECRET = (process.env.NODE_ENV === 'development') ? process.env.DEV_GITHUB_CLIENT_SECRET : process.env.PRO_GITHUB_CLIENT_SECRET;
  const SERVER_URL = (process.env.NODE_ENV === 'development') ? process.env.DEV_BACK_SERVER : process.env.PRO_BACK_SERVER;
  const GITHUB_CALLBACK_URL = SERVER_URL + '/auth/github/callback';

  const GitHubStrategy = require('passport-github').Strategy;
  
  passport.use(
    new GitHubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: GITHUB_CALLBACK_URL
      },
      async(accessToken, refreshToken, profile, done) => {
        try {
          const user = await User.findOne({ where: { github_id : profile.id } });
		      if (user) {
            return done(null, user);
          } else {
            const newUserData = {
      	      nickname: profile.displayName,
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
