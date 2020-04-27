const Stack = require('./stack');

class _StackNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class QueueFromStacks {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    };

    enqueue(value) {
        for (let i = 0; i < this.stack2.length; i++) {
            this.stack1.push(this.last.pop())
        }
        this.stack1.push(value);
    }

    dequeue() {
        while (this.stack1) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.pop();
    }

    peek() {
        if(this.stack1.length > 0) {
            return this.stack1[0];
        }
        return this.stack2[this.stack2.length - 1];
    }
}

function main() {
    let newQueue = new QueueFromStacks();

    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.enqueue(4);
    newQueue.enqueue(5);
    newQueue.enqueue(6);
    newQueue.dequeue();

    return newQueue;
}

console.log(main());