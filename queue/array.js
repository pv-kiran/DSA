class Queue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    enqueue(value) {
       if(this.size === 0) {
          this.queue[0] = value ;
          this.size++;
          return true;
       } else {
         this.queue[this.size] = value ;
         this.size++;
         return true;
       }
    }

    dequeue() {
        if(this.size === 0) {
            console.log('Queue is empty');
            return -1;
        } else {
            let firstElement = this.queue[0];
            for(let i = 0 ; i < this.size - 1 ; i++) {
               this.queue[i] = this.queue[i+1];
            }
            this.queue.length-- ;
            this.size--;
            return firstElement;
        }
    }

}


const queue  = new Queue();
console.log(queue);

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

console.log(queue);

queue.dequeue();
console.log(queue);

queue.dequeue();
console.log(queue);

queue.dequeue();
queue.enqueue(50)
console.log(queue);

queue.enqueue(60)
console.log(queue);

queue.dequeue();


console.log(queue);

