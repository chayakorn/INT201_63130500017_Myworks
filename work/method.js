let arr = [5, 6, 6, 7, 8, 9];

// console.log(arr.every((n => n > 5)));
// console.log(arr.every(n => n >= 3));

console.log(arr.indexOf(5));
console.log(arr.indexOf(6, 3));
console.log(arr.indexOf(6));
console.log(arr.indexOf(1));

console.log(arr);

arr[arr.indexOf(5)] = 1;
console.log(arr);