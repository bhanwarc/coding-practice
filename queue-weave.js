class Queue {
    queue = [];

    add (a) {
        this.queue.unshift(a);
    }
    
    remove () {
        return this.queue.pop()
    }

    peek () {
        return this.queue[this.queue.length - 1]
    }
}

function weave (sourceOne, sourceTwo) {
    const q = new Queue();

    while(sourceOne.peek() || sourceTwo.peek()) {
        if(sourceOne.peek()) {
           q.add(sourceOne.remove())
        }
        if(sourceTwo.peek()) {
            q.add(sourceTwo.remove())
        }
    }
    return q;
}


const sourceOne = new Queue()
sourceOne.add(1)
sourceOne.add(2)
sourceOne.add(3)
sourceOne.add(4)
const sourceTwo = new Queue()
sourceTwo.add("A")
sourceTwo.add("B")
sourceTwo.add("C")

console.log(weave(sourceOne, sourceTwo))