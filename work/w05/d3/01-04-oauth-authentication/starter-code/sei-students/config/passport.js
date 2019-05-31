const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Student = require('../models/student');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    function(accessToken, refreshToken, profile, cb) {
      // a user has logged in with OAuth
      Student.findOne({ googleId: profile.id }, (err, student) => {
        if (err) return cb(err);
        if (student) {
          // returning user
          student.avatar = profile.photos[0].value;
          student.save(err => {
            if (err) return cb(err);
            return cb(null, student);
          });
          return cb(null, student);
        } else {
          // brand new user
          var newStudent = new Student({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
            avatar: profile.photos[0].value
          });
          newStudent.save(err => {
            if (err) return cb(err);
            return cb(null, newStudent);
          });
        }
      });
    }
  )
);

passport.serializeUser((student, done) => {
  done(null, student.id);
});

passport.deserializeUser((id, done) => {
  Student.findById(id, (err, student) => {
    done(err, student);
  });
});
