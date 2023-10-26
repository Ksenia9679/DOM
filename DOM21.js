// Задание 21 Маркова Ксения 3ИСИП-621
let input = document.querySelector('input');
let button = document.querySelector('button');
button.onclick = () => {
    input.value = (input.value-32)*5/9;
}