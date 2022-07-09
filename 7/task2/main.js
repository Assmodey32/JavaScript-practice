// Из JavaScript создайте страницу с полем для ввода и пустым h2-элементом. Введённый в поле текст должен отображаться внутри h2-элемента, но с задержкой в 300 мс. При этом каждый введённый пользователем в поле символ сбрасывает предыдущий отложенный вызов и запускает новый. Таким образом программа должна ожидать завершения ввода пользователя и только после этого изменять текст в h2.

'use strict';

let input = document.getElementById('text-input');
let h2 = document.getElementById('text');

let intervalId;

input.oninput = function () {
    clearInterval(intervalId);
    intervalId = setTimeout(function () {
        h2.innerHTML = input.value;
    }, 300);
}