function convert(n) {
  if (n == "I") {
    n = 1;
  } else if (n == "V") {
    n = 5;
  } else if (n == "X") {
    n = 10;
  } else if (n == "L") {
    n = 50;
  } else if (n == "C") {
    n = 100;
  } else if (n == "D") {
    n = 500;
  } else if (n == "M") {
    n = 1000;
  }
  return n;
}
function eiei() {}

function romanConvert(s) {
  s = s.split("");
  s = s.map(convert);
  let ans = 0;
  for (x = 0; x < s.length; x++) {
    if (s[x] < s[x + 1]) {
      ans += s[x + 1] - s[x];
      x++;
    } else ans += s[x];
  }
  return ans;
}

// ['X','I','V']
// [10,1,5]
// 0 10
// 10
// 11
// 16

console.log(romanConvert("XXXIV"));
