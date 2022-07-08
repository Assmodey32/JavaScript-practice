// Напишите функцию, создающую выпадающий список на веб-странице (HTML select) из массива объектов со значениями. Массив должен содержать объекты со свойствами:
// •	value — значение для атрибута value тэга option
// •	label — значение для содержимого тэга option (заголовок элемента при открытии списка или выбранного значения)
// Вторым аргументом функция должна принимать выбранное значение (value выбранного по умолчанию элемента). По умолчанию выбирается 0-й элемент массива значений. Если переданное значение не найдено в массиве элементов, то нужно также выбрать 0-й элемент.
// Возвращаемое значение — DOM-элемент select.
// Создайте базовую html-разметку в файле index.html. В неё поместите получившийся код с помощью <script src="./main.js"></script>. Внутри другого тэга script перед </body> поместите код, который создаст новый select с произвольным массивом значений и поместит его в любое место в body.

function generateValueLabelArray(length) {
  let arr = [];
  for (let i = 0; i < length; ++i) {
    let obj = {};
    obj.value = i;
    obj.label = 'Label ' + i;
    // obj.label = randomCountry();
    arr.push(obj);
  }
  return arr;
}

function createSelect(arr, value) {
  let select = document.createElement('select');
  for (let i = 0; i < arr.length; ++i) {
    let option = document.createElement('option');
    option.value = arr[i].value;
    option.innerHTML = arr[i].label;
    if (arr[i].value === value || i === 0) {
      option.selected = true;
    }
    select.append(option);
  }
  return select;
}