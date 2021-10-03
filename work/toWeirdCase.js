function toWeirdCaseMap(string) {
    return string.split(" ")
        .map((word, index) => {
            return word.split("")
                .map((word, index) => {
                    return index % 2 == 0 ? word.toUpperCase() : word;
                }).join("");
        }).join(" ");
}
console.log(toWeirdCaseMap("hello yaya asdf"));

function toWeirdCase(string) {
    let arr = string.split(" ");
    for (i = 0; i < arr.length; i++) {
        temp = arr[i].split("");
        for (j = 0; j < temp.length; j++) {
            temp[j] = j % 2 == 0 ? temp[j].toUpperCase() : temp[j];
        }
        arr[i] = temp.join("");
    }
    return arr.join(" ");
}
console.log(toWeirdCase("pa pa p p"));
let s = "sss";
// arr = s.split("");
// arr[2] = "a";
// s = arr.join('');
let arr = [...s];

console.log(s);