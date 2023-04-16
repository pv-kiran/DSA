class Stack {
    constructor() {
        this.stack = [];
    }


    push(value) {
        if(this.stack.length === 0) {
            this.stack[0] = value
        } else {
            this.stack[this.stack.length] = value;
        }
        return this.stack;
    }

    pop() {
        if(this.stack.length === 0) {
            console.log('Stack is empty');
            return -1 ;
        } else {
            let lastElement = this.stack[this.stack.length - 1] ;
            this.stack.length = this.stack.length - 1;
            return lastElement;
        }
       
    }

    peak() {
        if(this.stack.length === 0 ) {
            console.log('Stack is empty');
            return -1 ;
        } else {
          console.log(this.stack[this.stack.length-1]);
          return this.stack[length-1];
        }
    }

    display() {
        for(let i = 0 ; i < this.stack.length ; i++) {
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

myStack.pop();
console.log(myStack)

myStack.pop();
console.log(myStack)

myStack.push(50);
console.log(myStack)

myStack.pop()
myStack.pop()

console.log(myStack);