const Queue = require('./queue');

class Customer {
    constructor(paperwork) {
        this.paperwork = paperwork;
    }
}

function bankQueue() {
    let customers = new Queue();

    function enterQueue(customers) {
        let chances = Math.floor(Math.random()*100);
        // console.log(chances);
        if (chances < 25) {
            paperwork = false;
        } else {
            paperwork = true;
        }
        let newCustomer = new Customer(paperwork);
        console.log('Customer has correct paperwork?', newCustomer.paperwork);
        customers.enqueue(newCustomer);
    }
    while (customers.size < 20) {
        enterQueue(customers);
    }
}

bankQueue();