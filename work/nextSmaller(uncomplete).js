function nextSmaller(n) {
    let arr = Number(n).toLocaleString().split('');
    let ans = [];
    let tmp = [];
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        tmp = tmp.concat(arr[i]);
        console.log(tmp)
        for (j = 0; j < arr.length; j++) {
            if (tmp.find((sd) => sd = arr[j]) != arr[j]) {
                tmp = tmp.concat(arr[j]);
                console.log(tmp);

            }
            // console.log(tmp)
            if (tmp.length == arr.length && ans.find((sd) => sd = tmp) != tmp) {
                ans.push(tmp);

                tmp = [];
                break;
            }
            if (j == arr.length - 1) {
                j = 0;
            }
        }
        if (i == arr.length - 1) {
            i = 0;
        }
        console.log(ans.length + "" + arr.length * (arr.length - 1))
        if (ans.length == arr.length * (arr.length - 1))
            break;
    }
    console.log(ans);


    // let first = n;
    // n = n.toLocaleString();
    // let arr = [];
    // let count = 0;
    // let tmp = '';
    // console.log(n.length - 1);
    // while (arr.length <= (n.length * (n.length - 1))) {
    //     for (i = 0; i < n.length; i++) {
    //         // tmp = n[i];
    //         n[i] = n[i + 1];
    //         n[i + 1] = tmp;
    //         if (!arr.includes(n)) {
    //             arr.push(n);
    //         }
    //     }
    //     console.log(arr[0])
    // }
    // console.log(arr);
    // return arr[arr.findIndex((num) => num = n.toLocaleString())];
}
console.log(nextSmaller(531))