class Node {
    constructor(value) {
        this.value = value;
        this.next =null;
    }

}

class LinkedList {
    constructor() {
        this.head === null ;
        // this.size = 0;
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

    reverse() {
        let current = this.head ;
        let before = null ;
        let after ;
        while(current) {
            after = current.next ;
            current.next = before;
            before = current ;
            current = after;
        }
        this.head = before;
    }

    removeDuplicate() {
        let current , tracker , previous ;
        current = this.head;
        previous = this.head;
        while(current) {
            tracker = current;
            let count = 0;
            while(tracker) {
                if(current.value === tracker.next?.value) {
                    tracker.next =  tracker.next?.next;
                    count++;
                } else {
                    tracker = tracker.next;
                }
            }
            if(count >= 1) {
               if(this.head === current) {
                  this.head = this.head.next;
                  previous = this.head;
               } else {
                 previous.next = current.next;
                 previous = previous.next;
               }
            }
            // previous = previous?.next;
            previous = current;
            current = current.next;
        }
    }

    removeNextandPrev(value) {
        if(this.isEmpty()) {
            console.log('Empty list');
            return;
        }
        let current = this.head;
        let slowTracker = current; 
        let fastTracker = current.next ;

        if(current.value === value ) {
            slowTracker.next = slowTracker.next.next
            return;
        }
        else if(current.next.value === value) {
            this.head = this.head.next;
            fastTracker.next = fastTracker.next.next
            return;
        }
        while(current && current.next?.next?.value != value) {  
            current = current.next;
        }
        slowTracker = current ;
        // console.log(slowTracker.value)
        fastTracker = current?.next?.next ;
        // console.log(fastTracker.value)
        if(current) {
            slowTracker.next = fastTracker ;
            fastTracker.next = fastTracker.next?.next;
            return;
        } else {
            console.log('Not found');
        }
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

    insertAt(index , value) {
        if(index < 0  || index > this.size) {

            console.log('Operation is not possible');

        } else {
            
            const node = new Node(value);
            let prev = this.head ;
            for(let i = 0 ; i < index - 1 ; i++) {
                prev = prev.next ;
            }

            node.next = prev.next ;
            prev.next = node;
            
            this.size++;
        }
    }

    removeFrom(index) {
        if(index < 0 || index > this.size) {
            console.log('Not valid');
            return;
        }
        else {
            let prev = this.head;
            for(let i = 0 ; i< index -1 ; i++) {
                prev = prev.next ;
            }
            prev.next = prev.next.next ;
            this.size-- ;
            return;
        }
    }

    removeValue(value) {
        if(this.isEmpty()) {
            console.log('Not a valid operation');
        }
        else if(this.head.value === value) {
           console.log(`Found at head 0`);
           this.head = this.head.next;
        } else {
            let current = this.head ;
            while(current.next && current.next.value !== value) {
               current = current.next ;
            }
            if(current.next) {
                current.next = current.next.next ;
                this.size--;
                return;
            } else {
                console.log('Not found');
                return;
            }
        }
    }

    // deletingNextandPrev(value) {
    //     let slow = this.head;
    //     let fast = this.head.next;
    //     let current = this.head;



    //     if(this.head.value === value) {
    //         this.head = this.head.next;
    //         this.size--;
    //         return;
    //     }

    //     else if(this.head.next.value === value) {
    //         fast.next = fast.next.next ;
    //         this.head = this.head.next;
    //         this.size--;
    //         return;
    //     }



    //     while( current && current.next?.next?.value != value) {
    //         current = current.next;
    //     }
    //     if(current) {
    //         slow = current;
    //         fast = current.next?.next;
    //         slow.next = fast;
    //         fast.next = fast.next?.next
    //         this.size = this.size--;
    //     } else {
    //         console.log('No node found');
    //     }
    // }

    changeNextdelPrev(value , newValue) {
      let current = this.head;
      let slow = this.head;
      let fast = this.head.next;
      if(this.head.value === value) {
        console.log('Hi');

        fast.value = newValue;
        return;
      }
      if(this.head.next.value === value) {
        console.log('Hi');
        fast.next.value = newValue;
        this.head = fast;
        this.size--;
        return;
      }
      while(current && current.next?.next?.value != value ) {
         current = current.next;
      }
      if(current) {
          slow = current;
        //   console.log(slow.value)
          fast = current.next?.next
        //   console.log(fast.value)
          slow.next = fast;
          if(fast.next) {
           fast.next.value = newValue;
          }
          this.size--;
        //   console.log('Hi');

      } else {
        console.log('Node not found');
      }
    }

    findMid() { 
      let current = this.head;
      let slowTracker = this.head;
      while(current?.next) {
         slowTracker = slowTracker.next
         current = current.next?.next;
      }
      console.log(slowTracker.value)
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