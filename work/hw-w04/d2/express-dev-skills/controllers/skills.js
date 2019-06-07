const Skill = require("../model/skill");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

function update(req, res) {
  Skill.update(req.params.id, req.body);
  res.redirect('/skills');
}

function edit(req, res) {
  res.render('skills/edit', {
    skill: Skill.getOne(req.params.id),
    idx: req.params.id
  });
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.param.id);
  res.redirect('/skills');
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render("skills/new");
}

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll()
  });
}

function show(req, res) {
  res.render("skills/show", {
    skills: Skill.getOne(req.params.id),
    idx: req.params.id
  });
}
