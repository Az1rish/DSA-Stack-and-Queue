const _Node = require('./nodeStack');

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
        this.size++;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
        this.size--;
    }

}

module.exports = Stack;