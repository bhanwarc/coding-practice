// const vowelsCount = (str) => {
//     const matches = str.match(/[aeiou]/gi);
//     return matches && matches.length || 0
// }

const vowelsCount = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) count++
    }
    return count;
}

console.log(vowelsCount("Hello world"))
console.log(vowelsCount("My name is Bob"))
console.log(vowelsCount(""))