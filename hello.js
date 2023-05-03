// unique elements in an array

// let arr  = [1,1,2,4,5,5,6,3,1,6,7,7,9];
// let uniqueArr = [];
// for(let i = 0 ; i < arr.length ; i++) {
//     let unique = 1;
//     for(let j = 0 ; j < arr.length ; j++) {
//         if(arr[i] === arr[j] && i != j) {
//             unique++;
//         }
//     }
//     if(unique === 1 ) {
//        uniqueArr.push(arr[i]);
//     }
// }

// console.log(uniqueArr)

// console.log(Math.abs(-))



// find pair with closest value to a target value
// let target = 33
// let closest = Number.MAX_VALUE ;
// let flag = false;
// let arr = [ 19,  15 , 8 , 19 , 7 , 13] ;
// let closePair;
// for(let i = 0 ; i < arr.length ; i++) {
//     for(let j = i + 1 ; j < arr.length ; j++) {
//         if(arr[i] + arr[j] === target) {
//            closePair = [arr[i] , arr[j]];
//            flag = true;
//            break;
//         } else {
//            let difference = Math.abs(target - ( arr[i] + arr[j] )) ;
//            if(difference < closest) {
//              closest = difference;
//              closePair = [arr[i] , arr[j]];
//            }
//         }
//     }
//     if(flag) {
//         break;
//     }
// }

// console.log(closePair)

// let arr = [1,4,6,7];
// let arr = [12,12];

// let result = maxSecondmax(arr , Number.MIN_VALUE , Number.MIN_VALUE);
// console.log(result)

// function maxSecondmax(A = []  ) {
//     let max = A[0];
//     let secondMax = A[0];
//     console.log(A.length);
//     if(A.length === 1) {
//         console.log(A.length)
//         console.log(A)
//         return A;
//     }
//     if(A.length === 0) {
//         console.log(A)
//         return true;
//     }
//     let maxIndex ;
//     for(let i = 0 ; i < A.length ; i++) {
//         if(A[i] > max) {
//                 secondMax = max ;
//                 max = A[i];
//                 maxIndex = i;
//         }
//         else if(A[i] != max && A[i] > secondMax) {
//                 secondMax = A[i];
//         }
//     }
   

//     console.log(max);
//     console.log(secondMax);

//    A =  operation(A , max , secondMax , maxIndex );

//    return maxSecondmax(A, Number.MIN_VALUE , Number.MIN_VALUE)
// }


// function operation(arr = [] , max , secondMax  , maxIndex ) {
//      let difference = max - secondMax ;
//      console.log(difference);
//      arr[maxIndex] = difference ;
//      let secondMaxIndex ;
//      for(let i = 0 ; i < arr.length ; i++) {
//         if(arr[i] === secondMax) {
//             secondMaxIndex = i;
//         }
//      }
//      let delArr;
//      if(difference > 0) {
//         delArr = deleteOperation(arr , secondMaxIndex);
//         return delArr;
//      }
//      if(difference === 0) {
//         if(maxIndex > secondMaxIndex) {
//             delArr = deleteOperation(arr , maxIndex);
//             delArr = deleteOperation(delArr , secondMaxIndex);
//             return delArr;
//         } else {
//              delArr = deleteOperation(arr , secondMaxIndex);
//              deleteOperation(delArr , maxIndex);
//         }
//      }

// }

// function deleteOperation(arr = [] , deleteIndex) {
//     console.log(deleteIndex);
//     console.log(arr)
//     for(let i = deleteIndex ; i < arr.length ; i++) {
//         arr[i] = arr[i+1];
//     }
//     arr.length--;
//     console.log(arr);
//     return arr;
    
// }


// let arr = [1,4,6,8,10];
// let newEl = 7;
// let index = 0 ;
// while(arr[index]) {
//     if(arr[index] < newEl) {
//         index++ ;
//     } else {
//         break;
//     }
// }

// for(let i = arr.length - 1 ; i >= index ; i-- ) {
//    arr[i+1] =arr[i];
// }

// arr[index] = newEl;
// console.log(arr)



// let arr  = [10 , 30 , 5 , 100 , 2 , 9 , 1 ,5 , 6];
// let i = 0;
// let j = 0;
// while(arr[i]) {
//     i = i+2;
//     j = j+1;
// }

// console.log(arr[j-1])




// let j = 0;

// for(let i = 0 ; i < arr.length  ; i = i + 2 ) {
//      let temprory = arr[j + 1];
//      console.log(temprory);
//      if(arr[i] > arr[arr.length - 1]) {
//         let temp = arr[i];
//         arr[i] = arr[arr.length - 1];
//         arr[i+1] = temp;
//      }
     
//      arr[arr.length - 1] = temprory;
//      j++;

// }

// console.log(arr)

// let arr = [53,90,192,40 , 999];
// let arr = [ 90 , 80 , 9 , 99 , 33 , 34 , 79 , 88 , 4, 5,1];

// let arr = [10, 2]
// let tempArr= [];

// for(let i = 0 ; i < arr.length ; i++) {
//     let temp;
//     let number = arr[i];
//     while(number > 0) {
//        temp = number;
//        number = Math.floor(number / 10)
//     }
//     tempArr.push(temp);
// }


// let largestSeq = '' ;

// for(let i = 0 ; i < arr.length ; i++) {
//     for(let j = 0 ; j < arr.length - 1 - i ; j++) {
//         if(tempArr[j] > tempArr[j+1]) {
//             let temp = arr[j];
//             arr[j] = arr[j+1] ;
//             arr[j+1] = temp 
//         }
//         if(tempArr[j] > tempArr[j+1]) {
//             let temp = tempArr[j];
//             tempArr[j] = tempArr[j+1] ;
//             tempArr[j+1] = temp 
//         }
//     }

//     largestSeq = largestSeq + ' ' + arr[arr.length-1-i]
// }
// console.log(largestSeq)


// class Node  {
//     constructor(value) {
//         this.left = null ;
//         this.right = null;
//         this.value = value;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null
//     }

//     isEmpty() {
//         return this.root === null
//     }

//     insert(value) {
//         const node = new Node(value);
//         if(this.isEmpty()) {
//             this.root = node;
//         } else {
//             this.insertNode(this.root , node);
//         }
//     }

//     insertNode(root , node) {
//        if(node.value < root.value) {
//           if(root.left === null) {
//             root.left = node;
//           } else {
//               this.insertNode(root.left , node)
//           }
//        } else {
//           if(root.right === null) {
//             root.right = node;
//           } else {
//              this.insertNode(root.right , node);
//           }
//        }
//     }

//     search(root , value) {
//         if(!root) {
//             console.log('Not present');
//             return false;
//         }
//         if(root.value === value) {
//             console.log('Present at root');
//             return true;
//         } else {
//             if(value < root.value) {
//                return this.search(root.left , value);
//             }
//             if(value > root.value) {
//                 return this.search(root.right , value);
//             }
//         }
//     }

//     preOrder(root) {
//         if(root) {
//             console.log(root.value);
//             this.preOrder(root.left);
//             this.preOrder(root.right);
//         }
//     }

//     postOrder(root) {
//         if(root) {
//             this.postOrder(root.left);
//             this.postOrder(root.right);
//             console.log(root.value);
//         }
//     }

//     inOrder(root) {
//         if(root) {
//             this.inOrder(root.left);
//             console.log(root.value);
//             this.inOrder(root.right);
//         }
//     }

//     levelOrder(root) {
//         let queue = [];
//         queue.push(root);
//         while(queue.length) {
//             let current = queue.shift();
//             console.log(current.value);
//             if(current.left) {
//                 queue.push(current.left);
//             }
//             if(current.right) {
//                 queue.push(current.right);
//             }
//         }
//     }

//     minValue(root) {
//       if(!root.left) {
//         console.log(root.value);
//          return root.value ;
//       } else {
//         this.minValue(root.left);
//       }
//     }

//     maxValue(root) {
//         if(!root.right) {
//             console.log(root.value);
//             return root.value;
//         } else {
//             this.maxValue(root.right);
//         }
//     }

//     isBST(root , min , max) {
//        return this.validateBST(root , min , max);
//     }

//     validateBST(root , min , max) {
//         if(!root) {
//            return true;
//         } 

//         if(root.value < min || root.value > max) {
//             return false;
//         }

//         return this.validateBST(root.left , min , root.value) && this.validateBST(root.right , root.value , max);
//     }

//     delete(value) {
//         this.root =  this.deleteNode(this.root , value);
//     }

//     deleteNode(root , value) {
//         if(root === null) {
//             return root ;
//         }

//         console.log(root.value)
//         if(value < root.value) {
//           console.log(root.value);
//           root.left = this.deleteNode(root.left , value);
//         }

//         else if(value > root.value) {
//             console.log(root.value);
//             root.right = this.deleteNode(root.right , value);
//         }

//         else {
//             console.log(root.value)
//            if(!root.left && !root.right) {
//              return null;
//            }
//            else if(!root.left) {
//              return root.right
//            }
//            else if(!root.right) {
//             return root.left;
//            }
//            let minValue = this.minValue(root.right);
//            root.value = minValue;
//            root.right = this.deleteNode(root.right , value);
//         }



//         return root;
//     }
   
// }


// const bst = new BST();
// bst.insert(10);
// bst.insert(7);
// bst.insert(5);
// bst.insert(8);
// bst.insert(15);
// bst.insert(17);

// bst.insert(12);
// bst.insert(13);

// bst.insert(11);
// bst.insert(19);


// bst.insert(3);
// bst.insert(6);
// bst.insert(2);
// bst.insert(1);
// bst.insert(19);




// console.log(bst);

// bst.search(bst.root , 66);

// bst.preOrder(bst.root);
// bst.postOrder(bst.root);
// bst.inOrder(bst.root);
// bst.levelOrder(bst.root);
// bst.minValue(bst.root);
// bst.maxValue(bst.root);

// let isbst = bst.isBST(bst.root , Number.MIN_VALUE , Number.MAX_VALUE)
// console.log(isbst);


// bst.delete(12);
// bst.levelOrder(bst.root)

// class Heap {
//     constructor() {
//         this.max_heap = [];
//     }

//     insert(value) {
//         if(this.max_heap.length === 0) {
//             this.max_heap[0] = value;
//         } else {
           
//            let index = this.max_heap.length ;
//            this.max_heap[index] = value ;
//            while(index > 0 && this.max_heap[Math.floor(index /2)] < this.max_heap[index] ) {
//               let temp = this.max_heap[Math.floor(index /2)];
//               this.max_heap[Math.floor(index /2)] = this.max_heap[index] ;
//               this.max_heap[index] = temp;
//               index = Math.floor(index / 2);
//            } 

//         }
//         // console.log(this.max_heap);
//     }

//     max_heapify(arr = [] , n  , index) {
//         let left = 2*index + 1;
//         let right = 2*index + 2;
//         let largest = index;
//         if(left < n && arr[left] > arr[index]) {
//             largest = left;
//         }
//         if(right < n && arr[right] > arr[largest]) {
//             largest = right;
//         }
//         if(largest != index) {
//             let temp = arr[index];
//             arr[index] = arr[largest];
//             arr[largest] = temp;
//             this.max_heapify(arr , n , largest);
//         }
//     }

//     build_max_heap(arr = []) {
//         for(let i = Math.floor(arr.length/2) - 1 ; i >= 0 ; i--) {
//             this.max_heapify(arr , arr.length , i);
//         }
        
//         return arr;
//         // console.log(arr);
//     }



//     heap_sort(arr = []) {
//         this.build_max_heap(arr);
//         console.log(arr)
//          for(let i = arr.length - 1 ; i >= 0 ; i--) {
//              let temp = arr[i];
//              arr[i] = arr[0];
//              arr[0] = temp;
//              this.max_heapify(arr , i - 1 , 0);
//          }
//         console.log(arr);
//     }




// }


// const maxHeap = new Heap();
// maxHeap.insert(10);
// maxHeap.insert(50);
// maxHeap.insert(100);
// maxHeap.insert(60);
// maxHeap.insert(30);
// maxHeap.insert(90);
// maxHeap.insert(70);
// maxHeap.insert(80);
// maxHeap.insert(40);
// maxHeap.insert(20);

// maxHeap.build_max_heap([20 , 10 , 70 , 100 , 50 , 80 , 30 , 40 , 90 , 60]);
// maxHeap.heap_sort([10, 50 , 100 , 60 ,30,90,70,80,40,20])
// [10,100,20,15,30,50,45]
// maxHeap.heap_sort([200,10,100,20,15,30,50,45])

// console.log(maxHeap)




// console.log(maxHeap)






















