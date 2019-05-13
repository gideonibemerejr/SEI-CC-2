module.exports = {
  area,
  circumference
};

function area(radius) {
  return radius * radius * Math.PI;
}

function circumference(radius) {
  return radius * 2 * Math.PI;
}
