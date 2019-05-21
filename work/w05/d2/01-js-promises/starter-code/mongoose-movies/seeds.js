// utility to initialize database
require('./config/database');
const Movie = require('./models/movie');
const Performer = require('./models/performer');
const data = require('./data');
const p1 = Movie.deleteMany({});
const p2 = Performer.deleteMany({});
Promise.all([p1, p2])
  .then(results => {
    console.log(results);
    return Performer.create(data.performers);
  })
  .then(performers => {
    console.log(performers);
    return Movie.create(data.movies);
  })
  .then(movies => {
    console.log(movies);
  })
  .then(movies => {
    return Promise.all([
      Performer.findOne({ name: 'Mark Hamill' }),
      Movie.findOne({ title: 'Star Wars - A New Hope' })
    ]);
  })
  .then(results => {
    const mark = results[0];
    const starWars = results[1];
    starWars.cast.push(mark);
    return starWars.save();
  })
  .then(() => {
    process.exit();
  });

// var p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(['red', 'green', 'yellow']);
//   }, 4000);
// });

// p.then(result => {
//   console.log(result);
// })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('Finally!');
//   });

// p.then(result => {
//   console.log('This was called as well', result);
// });

// function asyncAdd(a, b, delay) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, delay);
//   });
// }

// asyncAdd(5, 10, 2000)
//   .then(sum => {
//     console.log(sum);
//     return asyncAdd(sum, 100, 1000);
//   })
//   .then(sum => {
//     console.log(sum);
//     return asyncAdd(sum, 1000, 3000);
//   })
//   .then(sum => {
//     console.log(sum);
//   });
