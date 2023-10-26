// Задание 20 Маркова Ксения 3ИСИП-621
let input = document.querySelector('input');
let button = document.querySelector('button');

let rand = (num) => {
    return Math.floor(Math.random() * num)
}

button.onclick = () => {
    let arr = input.value.split('');
    let count  = arr.length;
    input.value = "";
    let answ = [];
    for (let i = 0; i < count; i++) {
        answ.push(arr.splice(rand(arr.length),1));
        
    }
    input.value = answ.join('');
}