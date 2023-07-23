function calcSum(number) {
  return function innerFunc(number2) {
    return number += number2;
  }
}

let resSum = calcSum(0);

console.log(resSum(6));
console.log(resSum(7));
console.log(resSum(100));