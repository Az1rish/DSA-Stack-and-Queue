const Queue = require('./queue');

class Dancer {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

function createPartners() {  
    let men = new Queue();
    let women = new Queue();

    function lineUpDancers(name, sex, men, women) {
        if (sex === "male" || sex === "man" || sex === "M") {
            men.enqueue(new Dancer(name, "Male"));
        } else if (sex === "female" || sex === "woman" || sex === "F") {
            women.enqueue(new Dancer(name, "Female"));
        } else {
            throw new Error('Must provide a valid sex of the dancer')
        }
    
        return { men, women }
    }

    function announcePartners(mensQueue, womensQueue) {
        while (mensQueue.first && womensQueue.first) {
            let woman = womensQueue.first.value;
            let man = mensQueue.first.value;
            console.log(`${woman.sex} dancer is ${woman.name}, ${man.sex} dancer is ${man.name}`);
            mensQueue.dequeue();
            womensQueue.dequeue();
        }
        if (mensQueue.first) {
            if (mensQueue.size === 1) {
                console.log(`${mensQueue.first.name} is waiting for a partner`)
            } else {
                console.log(`There are ${mensQueue.size} male dancers waiting to dance`)
            }
        } else if (womensQueue.first) {
            if (womensQueue.size === 1) {
                console.log(`${womensQueue.first.name} is waiting for a partner`)
            } else {
                console.log(`There are ${womensQueue.size} female dancers waiting to dance`)
            }
        } else {
            console.log('No one currently waiting to dance')
        }
    }

    lineUpDancers('Jane', 'F', men, women);
    lineUpDancers('Frank', 'M', men, women);
    lineUpDancers('John', 'M', men, women);
    lineUpDancers('Sherlock', 'M', men, women);
    lineUpDancers('Madonna', 'F', men, women);
    lineUpDancers('David', 'M', men, women);
    lineUpDancers('Christopher', 'M', men, women);
    lineUpDancers('Beyonce', 'F', men, women);

    return announcePartners(men, women);
}

createPartners();