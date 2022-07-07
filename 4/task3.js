// Танк едет по дороге, на которой могут быть противотанковые мины. Дорога должна быть представлена в виде массива roadMines из 10 boolean-элементов. Если элемент равен true, то это мина. Движение танка должно быть представлено как цикл, в котором одна итерация — продвижение танка на следующий участок дороги (следующий элемент массива). При передвижении выводить в консоль сообщение «танк переместился на ${position}», где position — номер ячейки + 1. Если танк попал на мину, то нужно вывести сообщение «танк повреждён», если это 1-й взрыв, и «танк уничтожен», если это 2-й взрыв. После 2-го взрыва танк считается уничтоженным и прекращает движение.

function generateBooleanArray(length = 10) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.random() >= 0.8);
  }
  return array;
}

function task(roadMines) {
  console.log(`Roadmines: ${roadMines}`);
  let tankTakenMines = 0;
  for (let i = 0; i < roadMines.length; i++) {
    console.log(`танк переместился на ${i + 1},`);
    if (roadMines[i]) {
      tankTakenMines++;
      if (tankTakenMines === 1) {
        console.log(`танк повреждён,`);
      } else if (tankTakenMines === 2) {
        console.log(`танк уничтожен.`);
        break;
      }
    }
  }
}

task(generateBooleanArray());