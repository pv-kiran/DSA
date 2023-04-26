class Node {
    constructor(value) {
        this.value = value ;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    isEmpty() {
        return this.root === null ;
    }

    insertNode(root  , node) {
       if(node.value < root.value) {
          if(root.left === null) {
            root.left = node ;
          } else {
            this.insertNode(root.left , node);
          }
       } else {
          if(root.right === null) {
            root.right = node ;
          } else {
            this.insertNode(root.right , node);
          }
       }
    }

    insert(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.root = node;
        } else {
            this.insertNode(this.root , node);
        }
    }

    search(root , value) {
      if(!root) {
        // console.log(`Tree is empty`);
        return -1;
      } else {
        if(value === root?.value) {
            return true;
        } else {
            if(value < root?.value) {
                return this.search(root?.left , value);
            } else {
                return this.search(root?.right , value);
            }
        }
      }
    }

    // DFS
    preorder(root) {
       if(root) {
         console.log(root.value)
         this.preorder(root.left)
         this.preorder(root.right);
       } 
    }

    inorder(root) {
        if(root) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }

    postorder(root) {
        if(root) {
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.value);
        }
    }


    //BFS 
    levelOrder() {
        let queue = [];
        queue.push(this.root);
        while(queue.length) {
            let current = queue.shift();
            console.log(current.value);
            if(current.left) {
                queue.push(current.left)
            }
            if(current.right) {
                queue.push(current.right);
            }
        }
    }

    minValue(root) {
      if(!root.left) {
        return root.value;
      } else {
         return this.minValue(root.left);
      }
    }

    maxValue(root) {
        if(!root.right) {
            return root.value;
        } else {
            return this.maxValue(root.right);
        }
    }

    delete(value) {
        this.root =  this.deleteNode(this.root , value)
    }

    deleteNode(root , value) {
        console.log(root.value)
        if(root === null) {
            return root;
        }
        if (value < root.value) {
            console.log(root.left.value);
            root.left = this.deleteNode(root.left , value) ;
        } 
        else if(value > root.value) {
            root.right = this.deleteNode(root.right , value);
        }
        else {
            console.log(root.value , value)
            if(!root.left && !root.right) {
                return null;
            }
            else if(!root.left) {
                return root.right;
            }
            else if(!root.right) {
                return root.left;
            }
            let minVal = this.minValue(root.right);
            root.value = minVal;
            root.right = this.deleteNode(root.right , minVal);
        }
        return root;
    }
   
    isBST(root , minValue , maxValue) {
       return this.validateBST(root, minValue , maxValue) 
    }

    validateBST(root , minValue , maxValue) {
        console.log(maxValue)
        console.log(minValue)

        if(root === null) {
            return true;
        }
        if(root.value >= maxValue || root.value <= minValue) {
            console.log(maxValue);
            console.log(minValue);
            console.log(root.value)
            return false;
        } 
        else {
            console.log(root.value);
            console.log(minValue)
            console.log(maxValue)
            return this.validateBST(root.left , minValue , root.value) && this.validateBST(root.right , root.value , maxValue);
        }
    }

}

const bst = new BST();

// insertion and searching

// bst.insert(10);
// bst.insert(20)
// bst.insert(5);

// console.log(bst.search(bst.root ,5));
// console.log(bst.search(bst.root ,10));
// console.log(bst.search(bst.root ,20));

// console.log(bst.search(bst.root ,200));
// console.log(bst.search(bst.root ,110));

// console.log( 7 > Number.MAX_VALUE)
// Insertion and preorder

bst.insert(10);
bst.insert(7);
bst.insert(5);
bst.insert(8);
bst.insert(15);
bst.insert(3);
// bst.insert(6);

// console.log(bst.isBST(bst.root  ,   Number.MIN_VALUE , Number.MAX_VALUE )) 


// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);
// bst.insert(1);


// bst.delete(bst.root , 3);

// bst.preorder(bst.root);
// bst.inorder(bst.root);
// bst.postorder(bst.root);

// bst.delete(bst.root , 10);

bst.levelOrder();

// console.log(bst.maxValue(bst.root));
// console.log(bst.minValue(bst.root));




// console.log(bst.isEmpty())