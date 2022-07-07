function rectangleArea(x1, y1, x2, y2) {
  let a = Math.abs(x1 - x2);
  let b = Math.abs(y1 - y2);
  return a * b;
}


function compareFloat(a, b, n) {
  aFractional = Math.floor(Math.abs(a) % 1 * Math.pow(10, n));
  bFractional = Math.floor(Math.abs(b) % 1 * Math.pow(10, n));
  console.log(`a = ${a}, b = ${b} , n = ${n}`);
  console.log(`${aFractional} > ${bFractional}: ${aFractional > bFractional}`);
  console.log(`${aFractional} < ${bFractional}: ${aFractional < bFractional}`);
  console.log(`${aFractional} >= ${bFractional}: ${aFractional >= bFractional}`);
  console.log(`${aFractional} <= ${bFractional}: ${aFractional <= bFractional}`);
  console.log(`${aFractional} === ${bFractional}: ${aFractional === bFractional}`);
  console.log(`${aFractional} !==  ${bFractional}: ${aFractional !== bFractional}`);
  console.log('\n');
}

// compareFloat(13.123456789, 2.123, 5);
// compareFloat(13.890123, 2.891564, 2);
// compareFloat(13.890123, 2.891564, 3);

function randomOdd(lowerBound, upperBound) {
  let range = Math.abs(upperBound - lowerBound);
  let rand = Math.random() * range;
  let min = Math.min(lowerBound, upperBound);
  let max = Math.max(lowerBound, upperBound);
  let number = Math.round(rand) + min;
  if (number % 2 === 0) {
    if (number < max)
      number++;
    else
      number--;
  }
  return number;
}

function inRange(a, b, x) {
  min = Math.min(a, b);
  max = Math.max(a, b);
  return min <= x && x <= max;
}

function isOdd(number) {
  return number % 2 !== 0;
}

function autoTesting() {
  let passedTest = 0;
  let failedTest = 0;
  for (let i = 0; i < 1000; i++) {
    let a = Math.floor(Math.random() * 1001) - 500;
    let b = Math.floor(Math.random() * 1001) - 500;
    if (a === b)
      continue;
    for (let j = 0; j < 1000; ++j) {
      let n = randomOdd(a, b);
      if (inRange(a, b, n) && isOdd(n)) {
        passedTest++;
      } 
      else {
        failedTest++;
        console.log(`Error: ${a} ${b} ${n}`);
      }
    }
  }
  console.log(`Passed: ${passedTest}`);
  console.log(`Failed: ${failedTest}`);
}

autoTesting();