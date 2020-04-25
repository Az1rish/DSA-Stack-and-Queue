const Stack = require('./stack');

function makeStack() {
    let stack = new Stack();
    stack.push(3);
    stack.push(9);
    stack.push(5);
    stack.push(2);
    stack.push(7);
    stack.push(8);
    stack.push(4);

    return stack;
}

// console.log(makeStack());

function sort(stack) {
    let tempStack = new Stack();
    while (stack.top) {
        let temp = stack.pop();
        if (tempStack.top <= temp) {
            tempStack.push(temp);
        } else {
            while (temp < tempStack.top) {
                stack.push(tempStack.pop());
            }
            tempStack.push(temp);
        }
    }
    return tempStack;
}

console.log(sort(makeStack()));

function display(list) {
    let curr = list.top;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
}

display(sort(makeStack()));