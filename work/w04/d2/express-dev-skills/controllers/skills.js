const Skill = require('../model/skill');

module.export = {
  index
};

function index(req, res, next) {
  res.render('skills/index');
}
