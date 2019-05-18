let titleEl = document.getElementById('title');
let pEl = document.querySelector('.cool');
let aEl = document.querySelector('a');
let commentEls = document.querySelectorAll('.comment');

titleEl.style.textAlign = 'center';
pEl.innerHTML = 'Comments for <strong>Today</strong>';
aEl.setAttribute('href', 'https://www.google.com');

for(let commentEl of commentEls) {
    commentEl.style.fontSize = '30px';
}
console.log(document);