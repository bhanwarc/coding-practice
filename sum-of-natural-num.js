

// const sum = (num, res = 0 ) => {
//     if(num <= 1)  return num + res;
//     return sum(num - 1, res + num)
// }

const sum = (num ) => {
    if(num <= 1)  return num;
    return num + sum(num - 1)
}

console.log(sum(10))