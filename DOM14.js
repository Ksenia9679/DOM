// Задание 14 Маркова Ксения 3ИСИП-621
let p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {

    p[i].onclick = () => {
        let b = +p[i].innerHTML;
        p[i].textContent = b * 2;
    }
    
}