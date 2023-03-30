const capitalize = (str) => {
    return str.split(" ").map((s) => s[0].toUpperCase() + s.slice(1)).join(" ")
}


console.log(capitalize("my name is bob"))
console.log(capitalize("hi i'm bob the builder"))