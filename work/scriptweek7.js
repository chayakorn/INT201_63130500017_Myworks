//function expression
const doSomething = function(n1, n2, n3) {
    return n1 + n2 + n3;
};

console.log(doSomething(5, 2, 1));

const findSum = function sum(n) {
    if (n <= 1) return 1;
    else return n + sum(n - 1);
};
console.log(findSum(5));