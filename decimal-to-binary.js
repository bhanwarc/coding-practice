

const decimalToBinary = (num, binary = "") => {
    if(num <= 1) return num + binary;
    return decimalToBinary(Math.floor(num / 2), (num % 2) + binary)
}

console.log(decimalToBinary(23))