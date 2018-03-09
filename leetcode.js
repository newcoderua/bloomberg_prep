// https://github.com/chihungyu1116/leetcode-javascript
// http://sqlfiddle.com/#!9/35919e/6 for sql
// https://medium.freecodecamp.org/how-i-applied-lessons-learned-from-a-failed-technical-interview-to-get-5-job-offers-656fcf58034d

// var arr = [1,2,3,-1,-3]
// var goal = 0;
//
// const finder = (array, goal) => {
//
// }

var arr = [];

var func = () => {
  var a = new Date();
  if (arr.length >= 4) {
    arr.shift();
    arr.push(a.getTime());
  } else {
    arr.push(a.getTime());
  }
  //heavy logic
  for (var i = 0; i < 10000000; i++) {

  }
  if (arr[arr.length - 1] - arr[0] < 3000 && arr.length > 3) {
    return true;
  } else {
    return false;
  }
}

// console.log(arr[arr.length - 1] - arr[0]);
func();
console.log(func());
