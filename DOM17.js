// Задание 17 Маркова Ксения 3ИСИП-621
let p = document.querySelectorAll('p');
let input = document.querySelector('input');
let sum = 0;


for (let i = 0; i < p.length; i++) {
    p[i].onclick = () => {
        sum += 1;
        input.value = sum;
    } 
}