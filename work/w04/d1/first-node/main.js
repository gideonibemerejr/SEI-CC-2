let daysOfWeek = require("./days-of-week");
const circle = require("./utilities/circle");
const random = require("./utilities/random");

let day = daysOfWeek.getWeekday(5);
console.log(day);

console.log(circle.area(50));
console.log(circle.circumference(75));
for (let i = 0; i < 10; i++) {
  console.log(random(100, 200));
}
