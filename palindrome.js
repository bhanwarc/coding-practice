// const isPalindrome = (str) => {
//     const halfLen = Math.floor(str.length/2);
//     for(let i = 0; i < halfLen; i++ ) {
//         return str[i] === str[str.length - 1 - i]
//     }
// }

// const isPalindrome = (str) => {
//     return str === str.split("").reverse().join("");
// }

const isPalindrome = (str) => {
    if(str.length <= 1) return true;
    
    if(str.charAt(0) === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1))
    }
    return false;
}

console.log(isPalindrome("Hello World"))
console.log(isPalindrome("abba"))
console.log(isPalindrome("nayan"))
console.log(isPalindrome("nayaan"))