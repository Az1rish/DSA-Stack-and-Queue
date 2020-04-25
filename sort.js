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
    let count = 1;
    while (stack.top) {
        let temp = stack.pop();
        // console.log('temp', temp, count);
        count++;
        // console.log('temp', temp, 'tempStack.top', tempStack.top);
        if (temp >= tempStack.top || temp >= tempStack.top.data) {
            // console.log('greater than - temp', temp, 'stack', tempStack.top);
            tempStack.push(temp);
            // console.log('tempStack.top', tempStack.top);
        } else if (temp < tempStack.top) {
            while (temp < tempStack.top) {
                // console.log('less than - temp', temp, 'stack', tempStack.top);
                stack.push(tempStack.pop());
                // console.log('stack.top', stack.top);
            }
            tempStack.push(temp);
        }
    }
    return tempStack;
}

// console.log(sort(makeStack()));

function display(list) {
    let curr = list.top;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
}

display(sort(makeStack()));