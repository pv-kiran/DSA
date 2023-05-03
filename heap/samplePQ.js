class PQ {
    constructor() {
        this.values = [];
    }

    enqueue(val , priority) {
        this.values.push({val , priority});
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

let myPQ = new PQ();
myPQ.enqueue('A' , 5);
myPQ.enqueue('B' , 10);
myPQ.enqueue('C' , 2);
myPQ.enqueue('D' , 1);

console.log(myPQ);
