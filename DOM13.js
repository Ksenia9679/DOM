// Задание 13 Маркова Ксения 3ИСИП-621
let a = document.querySelector('a');

if (a.href.includes('http://')) {
    a.textContent += ' ' + '→';
}