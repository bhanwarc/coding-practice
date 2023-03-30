

class Node {
    constructor (data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
    }

    insertFirst (data) {
        this.head = new Node(data, this.head)
    }

    size () {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter ++;
            node = node.next;
        }
        return counter;
    }

    getFirst () {
        return this.head;
    }

    getLast () {
        if(!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if(!node.next) {
                return node;
            }
            node = node.next
        }
    }

    clear () {
        this.head = null;
    }

    insertLast (data) {
        const lastNode = this.getLast();
        const node = new Node(data, null);
        if(lastNode) {
            lastNode.next = node;
        } else {
            this.head = node;
        }
    }

    removeFirst () {
        if(!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast () {
        if(!this.head) {
            return;
        }

        if(!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    getAt (index) {
        let counter = 0;
        if(!this.head) return null;

        let node = this.head;
        while (node) {
            if(counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
    }

    removeAt (index) {
        if(!this.head) return;

        if(index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index-1)
        previous.next = previous.next.next;
    }

    insertAt (data, index) {
        if(!this.head) {
            this.head = new Node(data)
            return;
        }

        if(index === 0) {
            this.head = new Node(data, this.head)
            return;
        }


        const previous = this.getAt(index-1)
        const node = previous.next
        previous.next = new Node(data, node)
    }
    
}

const ll = new LinkedList();

ll.insertFirst(1)
ll.insertFirst(2)
ll.insertFirst(3)

// console.log(ll.size())
// console.log(ll.getFirst())
// console.log(ll.getLast())
// ll.clear();

ll.insertLast(10)

// ll.removeFirst()
// ll.removeLast()
// ll.removeLast()
// ll.removeLast()

// ll.removeAt(2)

// console.log(ll.getAt(3))

ll.insertAt(20, 2)
ll.insertAt(21, 2)

// console.log(JSON.stringify(ll))

ll.forEach((node, index) => {
    console.log(node)
})
