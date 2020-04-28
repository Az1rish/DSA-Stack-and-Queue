const Stack = require('./stack');

class QueueFromStacks {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    };

    // get size() {
        // let count = 0;
        // while (this.stack.top) {
            // count++;
        // }
        // return count;
    // }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.stack2.size === 0) {
            if (this.stack1.size === 0) {
                return 'Cannot dequeue, queue is empty';
            }
            while (this.stack1.size > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    peek() {
        if(this.stack1.size > 0) {
            return this.stack1[0];
        }
        return this.stack2[this.stack2.size - 1];
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

// console.log(main());

function display(list) {
    let curr = list.top;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
}

display(main().stack2);