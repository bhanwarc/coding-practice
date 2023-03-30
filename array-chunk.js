// const arrayChunk = (arr, chunkSize) => {
//     return Array(Math.ceil(arr.length/chunkSize)).fill().map((_, index) => index * chunkSize).map((i) => arr.slice(i, i+chunkSize))
// }


const arrayChunk = (arr, chunkSize) => {
    let chuncked = []
    let result = []
    for(let i = 0; i < arr.length; i++) {
        if(chuncked.length === chunkSize) {
            result.push([...chuncked]) 
            chuncked = []
        }
        chuncked.push(arr[i])
    }
    if(chuncked.length) {
        result.push(chuncked)
    }
    return result;
}

console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))