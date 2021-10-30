function sumIntervals(intervals) {
    let ans = [];
    for (i = 0; i < intervals.length; i++) {
        for (j = intervals[i][0]; j < intervals[i][1]; j++) {
            if (!ans.includes(j)) {
                ans.push(j);
            }
        }
    }
    return ans.length;
}
console.log(sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
]));