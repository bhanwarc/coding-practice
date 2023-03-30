// const isAnagram = (str1, str2) => {
//     const sortedStr1 = str1.toLowerCase().match(/[a-z]/g).sort().join("")
//     const sortedStr2 = str2.toLowerCase().match(/[a-z]/g).sort().join("")
//     return sortedStr1 === sortedStr2;
// }

const charMap = (str) => {
    const map = {};
    for(let i = 0; i < str.length; i++) {
        map[str[i]] = (map[str[i]] && map[str[i]] + 1) || 1
    }
    return map;
}

const isAnagram = (str1, str2) => {
    const charMapStr1 = charMap(str1.toLowerCase().replace(/[^\w]/g, ""))
    const charMapStr2 = charMap(str2.toLowerCase().replace(/[^\w]/g, ""))
    for(let char in charMapStr1) {
        if(charMapStr1[char] !== charMapStr2[char]){
            return false;
        }
    }
    return true;
}

console.log(isAnagram("rail safety", "fairy tales"))
console.log(isAnagram("RAIL SAFETY!!!", "fairy tales"))
console.log(isAnagram("Hi There", "Bye There"))