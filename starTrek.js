const Stack = require('./stack');

function starTrek() {
    const crew = new Stack();

    crew.push('Kirk');
    crew.push('Spock');
    crew.push('McCoy');
    crew.push('Scotty');
    
    return crew;
}

console.log(starTrek());