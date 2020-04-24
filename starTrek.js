const Stack = require('./stack');

function starTrek() {
    const crew = new Stack();

    crew.push('Kirk');
    crew.push('Spock');
    crew.push('McCoy');
    crew.push('Scotty');

    return crew;
}

// starTrek();

function peek(list) {
    if (list.top) {
        console.log(list.top);
    }
}

// peek(starTrek());

function isEmpty(list) {
    if (list.top) {
        console.log('Stack is not empty');
    } else {
        console.log('Stack is empty');
    }
}

// isEmpty(starTrek());
// isEmpty(new Stack());

function display(list) {
    let curr = list.top;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
}

// display(starTrek());

function removeMcCoy(list) {
    list.pop();
    list.pop();

    return list;
}

display(removeMcCoy(starTrek()));