const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  // let pairs = [];
  // for(i=0; i<str.length; str+2) {
  //   let pair = str.split();
  //   pairs.push(pair);
  // }
  // return pairs;
}

const reverse = (str) => {
  // write code for strings.reverse
  let arr = str.split('');
  arr.reverse();
  return arr.join('');

}

module.exports = {
  split,
  pairs,
  reverse
}