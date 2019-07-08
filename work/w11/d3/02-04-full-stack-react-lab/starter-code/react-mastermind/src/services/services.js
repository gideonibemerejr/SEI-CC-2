const url = '/api/scores/';

module.exports = {
  index,
  create,
  formatTime
};

//  * Here is a GET request to the url cached above
function index() {
  return fetch(url).then(res => res.json());
}

//  * Here is a POST request to the url cached above
function create(score) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(score)
  };
  return fetch(url, options).then(res => res.json());
}

function formatTime(seconds) {
  let mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  let secs = (seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}
