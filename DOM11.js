// Задание 11 Маркова Ксения 3ИСИП-621
let p = document.querySelectorAll('p');
let button = document.querySelector('button');

button.onclick = () => {
    
    for (let i = 0; i < p.length; i++) {
        p[i].textContent += ' ' + i;
    }

}