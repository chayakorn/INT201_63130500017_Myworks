function hamming(n) {
    let arr = [];
    for(i=0;i<11;i++){
        arr.push(Math.pow(2,i));
        arr.push(Math.pow(3,i));
        arr.push(Math.pow(5,i));
        for(j=0;j<10;j++){
            arr.push(Math.pow(2,i)*Math.pow(3,j));
            arr.push(Math.pow(2,i)*Math.pow(5,j));
            arr.push(Math.pow(3,i)*Math.pow(5,j));
            for(k=0;k<10;k++){
                arr.push(Math.pow(2,i)*Math.pow(3,j)*Math.pow(5,k));
            }
            
        }
    }
    arr = uniq(arr);
    arr.sort((a,b)=> a-b);
    console.log(arr);
    return arr[n-1];

  

}
function uniq(a) {
    var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

    return a.filter(function(item) {
        var type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}
console.log(hamming(7));
// function Hamming(n) {
//     var succession = [1];
//     var length = succession.length;
//     var candidate = 2;
//     while (length < n) {
//         if (isHammingNumber(candidate)) {
//             succession[length] = candidate;
//             length++;
//         }
//         candidate++;
//     }
//     return succession;
// }
// function isHammingNumber(num) {
//     while (num % 5 === 0) num /= 5;
//     while (num % 3 === 0) num /= 3;
//     while (num % 2 === 0) num /= 2;

//     return num == 1;
// }
// console.log(Hamming(7));
