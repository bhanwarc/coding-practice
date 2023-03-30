const spiralMatrix = (n) => {
    let matrix = Array(n).fill().map(row => Array(n).fill(0))

    let startRow = 0;
    let endRow = n - 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let counter = 1;

    while (counter <= n*n) {
        // fill first row
        // startRow ++
        for(let i = startColumn; i <= endColumn; i++ ){
            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++;


        // fill last column
        // endColumn --
        for(let i = startRow; i <= endRow; i++) {
            matrix[i][endColumn] = counter;
            counter++;
        }
        endColumn--;


        // fill last row
        // endRow --
        for(let i = endColumn; i >= startColumn; i--) {
            matrix[endRow][i] = counter;
            counter++;
        }
        endRow--;


        // fill first column
        // startColumn ++
        for(let i = endRow; i >= startRow; i--) {
            matrix[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    
    return matrix;
}

// console.log(spiralMatrix(1))
// console.log(spiralMatrix(2))
// console.log(spiralMatrix(3))
// console.log(spiralMatrix(4))
console.log(spiralMatrix(5))