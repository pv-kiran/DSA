class Node  {
    constructor(value) {
        this.value = value
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor() {
        this.head = null; 
        this.tail = null;
        this.size = 0 ;
    }

    isEmpty() {
        return this.size === 0 ;
    }

    prepend(value) {
       const node = new Node(value);
       if(this.isEmpty()) {
          this.head = node;
          this.tail = node;
          this.size++;
          return;
       } 
       
       node.next = this.head;
       this.head.prev = node;
       this.head = node;
       this.size++;

       return true;

    }

    findMid() {
      let current = this.head;
      let fastTracker = this.head ;
      let slowTracker = this.head;
      while(current) {
         slowTracker = slowTracker?.next;
         fastTracker = current
         current = current?.next?.next?.next
      }

      console.log(fastTracker.value);
      console.log(slowTracker.value);
      return slowTracker;
    }


    palindrome() {
        if(this.isEmpty()) {
            console.log('List is empty');
            return;
        }

        let mid = this.findMid();
        // console.log(mid.value);
        let current = this.head;
        let tail = this.tail;
        let flag = true;
        while(current != mid) {
            if(current.value === tail.value) {
                current = current.next ;
                tail = tail.prev;
            } else {
                flag = false;
                break;
            }
        }
        // console.log(current.value)
        if(!flag) {
            console.log('Not a palindrome')
        } else {
            console.log("palindrome")
        }
        return;
    }

    sumAlter()  {
        const mid = this.findMid();
        let current = this.head ;
        let tail = this.tail;
        let sum = 0;
        while(current != mid) {
            sum = sum + current.value + tail.value ;
            console.log(sum)
            tail = tail.prev;
            current = current.next;

        }
        console.log(sum);
        return
    }

    display() {
        console.log()
      if(this.isEmpty()) {
        console.log('List empty');
        return;
      }
      let current = this.head ;
      let listItems = ''
      while(current) {
        listItems = listItems + '-->' + current.value;
        current =  current.next;
      }
      console.log(listItems);
      return;
    }
}

const dll = new DLL();
dll.prepend(100)
dll.prepend(100)

dll.prepend(200)
dll.prepend(300)
dll.prepend(400)
dll.prepend(500)
dll.prepend(400)
dll.prepend(300)
dll.prepend(200)
dll.prepend(100)
dll.prepend(100)






dll.display()


// dll.findMid();
dll.palindrome();
dll.sumAlter();
dll.display()


