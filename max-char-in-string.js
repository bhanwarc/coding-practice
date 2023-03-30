const maxCharInString = (str) => {
    const charMap = {}
    for( let char of str.toLowerCase()) {
        charMap[char]= (charMap[char] && charMap[char] + 1 || 1)
    }

    let maxCount = 0;
    let resultChar = "";
    for(let char in charMap) {
        if(charMap[char] > maxCount) {
            maxCount = charMap[char];
            resultChar = char;
        }
    }
    return resultChar;
}


console.log(maxCharInString("Hello World"))
console.log(maxCharInString("aaaaaaagghagghhhaaagh"))
console.log(maxCharInString("aabbbcccc"))