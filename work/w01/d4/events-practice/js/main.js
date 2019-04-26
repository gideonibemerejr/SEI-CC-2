const button = document.querySelector('button'),
    input = document.querySelector('input'),
    ul = document.querySelector('ul')


button.addEventListener('click', function(event){
    const li = document.createElement('li');
    li.textContent = input.value;
    input.value = '';
    ul.appendChild(li);
    
})

ul.addEventListener('click', handleClick);

function handleClick(evt) {
    evt.target.style.color = 'red';
    evt.target.style.fontSize = "30px";

}