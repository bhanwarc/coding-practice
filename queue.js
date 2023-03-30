// class Queue {
//     queue = [];

//     add (a) {
//         this.queue.push(a);
//     }
    
//     remove () {
//         this.queue = this.queue.splice(1)
//     }
// }

class Queue {
    queue = [];

    add (a) {
        this.queue.unshift(a);
    }
    
    remove () {
        this.queue.pop()
    }
}

// const q = new Queue() 
// q.add(1)
// q.add(2)
// q.add(3)
// console.log(q.queue)
// q.remove()
// console.log(q.queue)

export default Queue