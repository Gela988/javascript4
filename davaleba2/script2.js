let input = document.querySelector('.input-form');
let button = document.querySelector('.button');
let ul = document.querySelector('.ul-list');

button.addEventListener('click', function(){
    let value = input.value;

if (value != ' '){

    let li = document.createElement('li');
    
    let btndelete = document.createElement('button');
    btndelete.textContent = 'x';

    btndelete.addEventListener('click', function(){
        li.remove();
    })

    li.textContent = value;

    li.appendChild(btndelete)
    ul.appendChild(li);

    input.value = ' ';
  }

})