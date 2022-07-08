// Напишите функцию, фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны передаваться в качестве аргументов

function filterByProperty(arr, property, value) {
  let result = [];
  for (let item of arr) {
    if (item[property] === value) {
      result.push(item);
    }
  }
  return result;
}

let objects = [{
    name: 'Василий',
    surname: 'Васильев'
  },
  {
    name: 'Иван',
    surname: 'Иванов'
  },
  {
    name: 'Петр',
    surname: 'Иванов'
  },
  {
    name: 'Пётр',
    surname: 'Петров'
  }
];

let result = filterByProperty(objects, 'name', 'Иван'); // [{name: 'Иван', surname: 'Иванов'}]
console.log('Test 1: ', result);

result = filterByProperty(objects, 'surname', 'Иванов'); // [{name: 'Иван', surname: 'Иванов'}, {name: 'Петр', surname: 'Иванов'}]
console.log('\nTest 2:', result);
