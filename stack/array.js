class Stack {
    constructor() {
        this.stack = [];
        this.size = 0;
    }


    push(value) {
        if(this.size === 0) {
            this.stack[0] = value;
            this.size++;
        } else {
            this.stack[this.size] = value;
            this.size++;
        }
        return this.stack;
    }

    pop() {
        if(this.stack.length === 0) {
            console.log('Stack is empty');
            return -1 ;
        } else {
            let lastElement = this.stack[this.size - 1] ;
            this.stack.length--;
            this.size--;
            return lastElement;
        }
       
    }

    peak() {
        if(this.size === 0 ) {
            console.log('Stack is empty');
            return -1 ;
        } else {
        //   console.log(this.stack[this.stack.length-1]);
          return this.stack[this.size-1];
        }
    }

    display() {
        for(let i = 0 ; i < this.size ; i++) {
            console.log(this.stack[i]);
        }
    }

}



let myStack = new Stack();
myStack.push(10)
myStack.push(20)
myStack.push(30)

// myStack.display();
console.log(myStack)

myStack.pop();
console.log(myStack)

myStack.push(40);
console.log(myStack)

myStack.peak();

myStack.pop();
console.log(myStack)

myStack.pop();
console.log(myStack)

myStack.push(50);
console.log(myStack)

myStack.pop()
console.log(myStack);

myStack.pop()

console.log(myStack);