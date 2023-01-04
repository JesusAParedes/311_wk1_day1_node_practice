const isEven = (num) => {
  // write code for numbers.isEven
return num % 2 === 0;
}

const sum = (arr) => {
  // write code for numbers.sum
  // let sum = arr.reduce((arr, total) => {(arr), total});
  let sum = 0;
  for(i = 0; i <arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

for(i=0; i<arr.length; i++) {
  for(j=0; j<i-1; j++) {
    if((arr[i] + arr[j]) === sum) {
    }
    return false;
  }
}
}

module.exports = {
  isEven,
  sum,
  comboSum
}