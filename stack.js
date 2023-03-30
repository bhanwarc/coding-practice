class Stack {
    data = [];

    push (el) {
        this.data.push(el);
    }

    pop () {
        return this.data.pop()
    }

    peek () {
        return this.data[this.data.length - 1]
    }
}

const s = new Stack()
console.log(s)
s.push(1)
s.push("A")
console.log(s)
s.push(2)
s.push("B")
console.log(s)
s.pop()
console.log(s)
s.pop()
console.log(s)
console.log(s.peek())
