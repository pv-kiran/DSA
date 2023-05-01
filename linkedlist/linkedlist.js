class Node {
    constructor(value) {
        this.value = value;
        this.next =null;
    }

}

class LinkedList {
    constructor() {
        this.head === null ;
    }

    prepend(value) {
       const node = new Node(value);
       if(this.head === null) {
        this.head = node ;
       } else {
          node.next = this.head;
          this.head = node;
       }
    }

    display() {
        let current = this.head ;
        let listValues = '';
        while(current) {
           listValues = listValues + '-->' +current.value;
           current = current.next;
        }
        console.log(listValues)
    }


    deleteSecondLargest(value) {
        let current = this.head;
        while(current.next.value != value) {
           current = current.next;
        }
        current.next = current.next.next;
    }

    findSecond(min) {
        let current = this.head;
        let largest = min;
        let secondLargest = min ;
        while(current) {
            if(current.value > largest) {
               secondLargest  = largest;
               largest = current.value;
            }
            if(current.value != largest &&  current.value > secondLargest) {
                secondLargest = current.value;
            }
            current = current.next;
        }
        this.deleteSecondLargest(secondLargest);
        console.log(secondLargest);
    }

}

const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.prepend(50);
list.prepend(60);

list.findSecond(Number.MIN_VALUE)

list.display();