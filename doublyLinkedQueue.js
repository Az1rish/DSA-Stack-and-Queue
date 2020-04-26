class _Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedQueue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const newNode = new _Node(data);

        if (this.first === null) {
            this.first = newNode;
        } else {
            this.last.next = newNode;
            newNode.prev = this.last;
        }

        this.last = newNode;
    }

    dequeue() {
        if (!this.first) {
            return;
        } 
        const node = this.first;
        this.first = this.first.next;
        
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

function makeStartrekQ() {
    let starTrekQ = new DoublyLinkedQueue();

    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhuru');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');

    return starTrekQ;
}

// console.log(makeStartrekQ());

function findFirst(queue) {
    console.log(queue.first);
}

findFirst(makeStartrekQ());