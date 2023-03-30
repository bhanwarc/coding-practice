
const mergeShort = (arr) => {
    if(arr.length <= 1) return arr;

    const mid = Math.floor((arr.length)/2);

    const firstHalf = mergeShort(arr.slice(0, mid));
    const secondHalf = mergeShort(arr.slice(mid));

    let result = [];
    while (firstHalf.length && secondHalf.length) {
        if(firstHalf[0] > secondHalf[0]) {
            result.push(...secondHalf.splice(0, 1))
        } else {
            result.push(...firstHalf.splice(0, 1))
        }
    }
        
    result = [...result, ...firstHalf, ...secondHalf]
    return result;
}

console.log(mergeShort([5, 1, 7, 3, 2, 9, 6, -1]))