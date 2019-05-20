var express = require('express');
var router = express.Router();
var request = require('request');
const rootURL = 'https://api.github.com/';
var token = process.env.GITHUB_TOKEN;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { userData: null });
});

router.post('/', function(req, res, next) {
  var options = {
    url: rootURL + 'users/' + req.body.username,
    headers: {
      'User-Agent': 'gideonibemerejr',
      Authorization: 'token ' + token
    }
  };
  request(options, function(err, response, body) {
    var userData = JSON.parse(body);
    // request the repos for this user
    options.url = userData.repos_url;
    request(options, function (err, response, body) {
      userData.repos = JSON.parse(body);
      console.log(userData.repos[0]);
      res.render('index', { userData });
    });
  });
});
// "user_url": "https://api.github.com/users/{user}"
// "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}"
// https://api.github.com
// 5000 requests per hour

module.exports = router;
