class Node {
    constructor(value) {
       this.value = value;
       this.next = null;
    }
}
class Stack {

    constructor() {
        this.head = null;
    }

    push(value) {
        const node = new Node(value) ;
        if(this.head ===  null) {
            this.head = node;
        } else {
            node.next = this.head ;
            this.head = node;
        }
    }

    pop() {
        if(this.head === null) {
            console.log('List is empty');
            return -1;
        } else {
            let lastElement = this.head.value ;
            this.head = this.head.next;
            console.log(lastElement);
            return lastElement ;
        }
    }

    peak() {
        if(this.head === null) {
            console.log('List is empty');
            return -1;
        } else {
            let lastElement = this.head.value ;
            console.log(lastElement);
            return lastElement ;
        }
    }


    // display() {
    //     if(this.head === null) {
    //         console.log('List is empty');
    //         return -1;
    //     } else {
    //         let current = this.head ;
    //         let stackItems = ''
    //         while(current) {
    //             stackItems = stackItems + '-->' + current.value;
    //             current = current.next;
    //         }
    //         console.log(stackItems);
    //     }
    // }
}



const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);

// myStack.display();


myStack.pop();

myStack.push(50);

myStack.pop();

myStack.peak();


// myStack.display();
