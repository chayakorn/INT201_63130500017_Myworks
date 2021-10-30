function sudoku(puzzle) {
    let row = puzzle;
    let col = [];
    for (i = 0; i < puzzle.length; i++) {
        let colans = [];
        for (j = 0; j < puzzle.length; j++) {
            colans.push(puzzle[j][i]);
        }
        col.push(colans);
    }
    let block = [];
    while (puzzle[8].length != 0) {
        for (i = 0; i < 9; i++) {
            let blockans = [];
            for (j = 0; j < 3; j++) {
                if (j == 4 || j == 7) {
                    i++;
                }
                blockans.push(puzzle[i][j]);
                puzzle[i].shift();
            }
            block.push(blockans);
        }
    }
    return block;

}
var puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];
console.log(sudoku(puzzle));

3
1256789
    [3, 4, 5]
12346789
5

1246789
    [4, 5]