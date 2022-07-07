function passwordCheck(password) {
  if (password.length < 4) {
    return false;
  }
  if (!password.includes('-') && !password.includes('_')) {
    return false;
  }

  return true;
}

// console.log(passwordCheck('12345678'));
// console.log(passwordCheck('1234567-'));
// console.log(passwordCheck('1234567_'));
// console.log(passwordCheck('1234567-_'));
// console.log(passwordCheck('-_-'));

function checkNameSurname(name, surname) {
  let newName = name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
  let newSurname = surname.substr(0, 1).toUpperCase() + surname.substr(1).toLowerCase();

  console.log(name === newName ? 'Имя осталось без изменений' : 'Имя было преобразовано в ' + newName);
  console.log(surname === newSurname ? 'Фамилия осталась без изменений' : 'Фамилия была преобразована в ' + newSurname);
}

checkNameSurname('Иван', 'Иванов');
checkNameSurname('ИвАн', 'ИваНов');
checkNameSurname('иван', 'ивВнов');
checkNameSurname('Иванюшик', 'ИвановиЧ');