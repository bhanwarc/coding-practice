// const reverseInteger = (integer) => {
//     return integer.toString().split("").reverse().join("")
// }


const reverseInteger = (integer) => {
    let reverseInt = 0
    let number = Math.abs(parseInt(integer));
    while(number > 0) {
        reverseInt = reverseInt * 10 + number % 10;
        number = Math.floor(number/10)
    }
    return reverseInt * Math.sign(integer)
}

console.log(reverseInteger(1234))
console.log(reverseInteger(123400))
console.log(reverseInteger(-123400))
console.log(reverseInteger(-1))