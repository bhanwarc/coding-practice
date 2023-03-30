// const reverseString = (str) => {
//     return str.split("").reverse().join("") 
// }

// const reverseString = (str) => {
//     return str.split("").reduce((a, b)=> b + a, "")
// }

// const reverseString = (str) => {
//     let reverseStr = "";
//     for(let i = str.length - 1; i >= 0; i--) {
//         reverseStr += str[i];
//     }
//     return reverseStr
// }


const reverseString = (str) => {
    if(str === "") return "";
    return reverseString(str.slice(1)) + str.charAt(0);
}

console.log(reverseString("Hello World"))