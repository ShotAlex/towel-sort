
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    if (matrix.length < 1) return [];
    let arr = [];

    for( let i = 0; i < matrix.length; i++) {
        let q = matrix[i];
        if (i % 2) q = matrix[i].reverse();
        q = arr.push(...q)
    }

    return arr;
}

