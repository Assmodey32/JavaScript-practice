function generateRandomNumber(m, n) {
  let min = Math.min(m, n);
  let max = Math.max(m, n);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function task(n, m, count) {
  let arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(generateRandomNumber(n, m));
  }
  console.log(arr);
}

function inRange(a, b, x) {
  min = Math.min(a, b);
  max = Math.max(a, b);
  return min <= x && x <= max;
}

function autoTesting() {
  let passedTest = 0,
    failedTest = 0;
  for (let i = 0; i < 100000; i++) {
    let a = Math.floor(Math.random() * 2001) - 1000;
    let b = Math.floor(Math.random() * 2001) - 1000;
    let c = Math.floor(Math.random() * 100) + 1;
    let testPassed = true;
    let testArr = [];
    for (let j = 0; j < c; ++j) {
      let n = generateRandomNumber(a, b);
      testArr.push(n);
      if (!inRange(a, b, n)) {
        testPassed = false;
      }
    }
    if (testPassed && testArr.length === c)
      passedTest++;
    else
      failedTest++;
  }
  console.log(`Passed: ${passedTest}`);
  console.log(`Failed: ${failedTest}`);
}

autoTesting();