const skills = [
  { name: 'HTML', stars: 5, years: 3 },
  { name: 'CSS', stars: 5, years: 3 },
  { name: 'SASS', stars: 4, years: 2 },
  { name: 'JavaScript', stars: 3, years: 1 },
  { name: 'Node.js', stars: 3, years: 1 }
];

module.exports = {
  getAll,
  getOne
};

function getOne(id) {
  return skills[id];
}

function getAll() {
  return skills;
}
