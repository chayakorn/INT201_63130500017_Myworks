import { sumStaked } from './function.js';
let sum = sumStaked("the first parameter");
console.log(sum);
document.getElementById("test").innerHTML = sum("second");
document.getElementById("test1").innerHTML = sum(" , third");
document.getElementById("test2").innerHTML = sum(" , fourth");