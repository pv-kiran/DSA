class Node {
    constructor(value) {
        this.right = null;
        this.left = null;
        this.value = value
    }
}

class Btree {
    constructor() {
        this.root = null ;
    }

    insert(value) {
      const node = new Node(value);
      if(this.root === null) {
        this.root = node;
      } else {
        let queue = [];
        queue.push(this.root);
        while(queue.length) {
            let current = queue.shift();
            if(!current.left) {
                current.left = node;
                break;
            }
            queue.push(current.left);
            if(!current.right) {
                current.right = node;
                break;
            }
            queue.push(current.right);
        }
      }
    }

    inorder(root) {
      if(root) {
        this.inorder(root.left)
        console.log(root.value);
        this.inorder(root.right);
      }
    }
}


let btree = new Btree();
btree.insert(100);
btree.insert(200);
btree.insert(300);
btree.insert(400);
btree.insert(500);
console.log(btree);

btree.inorder(btree.root)