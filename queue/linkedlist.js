class Node {
    constructor(value) {
         this.value = value;
         this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
    }

    enqueue(value) {
        const node = new Node(value);
        if(this.head === null) {
            this.head = node ;
        } else {
            let current = this.head ;
            while(current && current.next != null) {
                current = current.next ;
            }
            current.next = node ;
        }
    }

    dequeue() {
        if(this.head === null) {
            console.log('Queue is empty');
            return -1 ;
        } else {
           let firstElement = this.head.value ;
           this.head = this.head.next;
           return firstElement;
        }
    }

    // display() {
    //     if(this.head === null) {
    //         console.log('List is empty');
    //         return -1;
    //     } else {
    //         let current = this.head ;
    //         let queueItems = ''
    //         while(current) {
    //             queueItems = queueItems + '-->' + current.value;
    //             current = current.next;
    //         }
    //         console.log(queueItems);
    //     }
    // }
}



const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)
queue.enqueue(70)


// queue.display();

console.log(queue.dequeue());
// queue.display();

console.log(queue.dequeue());
// queue.display();cls


queue.enqueue(80)
// queue.display();