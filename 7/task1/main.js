'use strict';


// Создайте HTML-страницу с полем для ввода числа, кнопкой и div-элементом с числом 0. В поле для ввода должно вводиться число с количеством секунд, а кнопка должна запускать таймер. При запуске таймера число в div-элементе должно замениться на введённое в поле. Затем каждую секунду оно должно уменьшаться на единицу до тех пор, пока не дойдёт до 0. При этом таймер должен корректно работать, если во время его работы пользователь запускает его заново.

let button = document.getElementsByName('start-timer-button')[0];
console.log(button);
let timer = document.getElementById('timer-countdown');
console.log(timer);
let input = document.getElementsByName('timer-input')[0];
console.log(input);

let intervalId;

function decreaseTimer() {
  let timerValue = parseInt(timer.innerHTML);
  timerValue--;
  timer.innerHTML = timerValue;
  if (timerValue === 0) {
    clearInterval(intervalId);
    console.log('Timer stopped at 0!');
  }
}

button.onclick = function () {
  clearInterval(intervalId);
  console.log('Timer stopped by user!');
  timer.innerHTML = input.value;
  console.log('Timer started!');
  intervalId = setInterval(decreaseTimer, 1000);
};