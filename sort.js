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
    // make new stack to store sorted nodes
    let tempStack = new Stack();
    while (stack.top) {
        // pop top item from stack to be compared
        let temp = stack.pop();
        // if tempStack empty or if temp is less than tempStack.top push temp to top of tempStack
        
        if (!tempStack.top || temp <= tempStack.top.data) {
            tempStack.push(temp);
        } else if (temp > tempStack.top.data) {
            // if temp is greater than tempStack.top, pop tempStack.top and push to stack, then push temp to tempStack.top
            stack.push(tempStack.pop());
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
// console.log('stack', display(makeStack()));

display(sort(makeStack()));
// sort(makeStack());