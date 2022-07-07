function generateRandomString(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function reverseString(string) {
  result = '';
  for (let i = string.length - 1; i >= 0; --i) {
    result += string[i];
  }
  return result;
}

function isReverseString(string1, string2) {
  if (string1.length !== string2.length)
    return false;

  for (let i = 0; i < string1.length; ++i) {
    if (string1[i] !== string2[string2.length - 1 - i])
      return false;
  }
  return true;
}

function autoTesting() {
  let numOfTest = 1000;
  let passedTest = 0,
    failedTest = 0;
  for (let i = 0; i < numOfTest; ++i) {
    let string1 = generateRandomString(Math.floor(Math.random() * 11));
    let string2 = reverseString(string1);
    if (isReverseString(string1, string2)) {
      passedTest++;
      // console.log(`${string1} is reverse of ${string2}`);
    } else {
      console.log(`${string1} isn't reverse of ${string2}`);
      failedTest++;
    }
  }
  console.log(`Passed: ${passedTest}`);
  console.log(`Failed: ${failedTest}`);
}

autoTesting();