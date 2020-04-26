const _Node = require('./nodeQueue');

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }

        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
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
    let starTrekQ = new Queue();

    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhuru');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');

    return starTrekQ;
}

// console.log(makeStartrekQ());

function peek(queue) {
    console.log(queue.first);
}

// peek(makeStartrekQ());

function isEmpty(queue) {
    if (!queue.first && !queue.last) {
        return true;
    }
    return false;
}

// console.log(isEmpty(makeStartrekQ()));
// console.log(isEmpty(new Queue()));

function display(queue) {
    let curr = queue.first;
    while (curr) {
        console.log(curr.value);
        curr = curr.next;
    }
}

// display(makeStartrekQ());

function removeSpock(starTrekQ) {
    starTrekQ.dequeue();
    starTrekQ.dequeue();
    return starTrekQ;
}

console.log(removeSpock(makeStartrekQ()));

module.exports = { Queue, makeStartrekQ };