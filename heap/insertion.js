class Heap {


    constructor() {
        this.max_heap = [];
    }

    insert(value) {
       if(this.max_heap.length === 0) {
          this.max_heap[0] = value;
       } else {

           let index = this.max_heap.length ;
           this.max_heap[index] = value ;
           while(index > 0 && this.max_heap[Math.floor(index /2)] < this.max_heap[index] ) {
              let temp = this.max_heap[Math.floor(index /2)];
              this.max_heap[Math.floor(index /2)] = this.max_heap[index] ;
              this.max_heap[index] = temp;
              index = Math.floor(index / 2);
           } 
           
       }
    }


    max_heapify(arr = [] , i) {
        let left = 2*i + 1;
        let right = 2*i + 2;
       
        let largest = i;
        if( left < arr.length && arr[left] > arr[i]) {
            largest = left;
        } 
        
        if( right < arr.length && arr[right] > arr[largest]) {
            largest = right;
        }
        if(largest != i) {
            let temp = arr[i] ;
            arr[i] = arr[largest];
            arr[largest] = temp;
            this.max_heapify(arr , largest);
        }
    }

    build_max_heap(arr = []) {
        for(let i =  Math.floor(arr.length/2) - 1   ; i >= 0 ; i--) {
            console.log(i);
            console.log(arr[i])
            this.max_heapify(arr , i);
        }
    }

    extract_max(arr = []) {
       let max = arr[0];
       arr[0] = arr[arr.length - 1];
       arr.length = arr.length - 1;
       this.max_heapify(arr , 0);
       return max;
    }
}


const maxHeap = new Heap();
maxHeap.insert(10);
maxHeap.insert(50);
maxHeap.insert(100);
maxHeap.insert(60);
maxHeap.insert(30);
maxHeap.insert(90);
maxHeap.insert(70);
maxHeap.insert(80);
maxHeap.insert(40);
maxHeap.insert(20);


console.log(maxHeap)


// const heap = new Heap();
// heap.insert_into(100);
// heap.insert_into(200);
// heap.insert_into(50);
// heap.insert_into(40);
// heap.insert_into(300)

// console.log(heap);

// let arr =  [10,14,8,13,,6,7] ;
// heap.max_heapify(arr, 0);
// console.log(arr);



// let max = [10,30,20,100,40 , 60, 12 , 200];
// heap.build_max_heap(max)
// console.log(max)

// heap.extract_max(max);
// console.log(max);

// heap.heap_sort(max)
// console.log(max)

























// let arr = [50 , 30, 20 , 15 , 10 , 8 , 16];

// insert_heap(arr , 60);

// function insert_heap(arr = [] , key) {
//    let size = arr.length ;
//    arr[size] = key ;
//    let i = size ;
//    console.log(i);
//    while(i > 0 && arr[ Math.floor(i/2)] < arr[i]) {
//        let temp = arr[ Math.floor(i/2)];
//        arr[ Math.floor(i/2)] = arr[i];
//        arr[i] = temp;
//        i = Math.floor(i/2) ;
//        console.log(i)
//    }
// }

// console.log(arr)

// increase_key(arr , 4 , 100);
// function increase_key(arr = [] , index , key) {
//     let i = index ;
//     arr[i] = arr[i] + key ;
//     while( i > 0 && arr[Math.floor(i/2)] < arr[i]) {
//         console.log(i);
//         let temp = arr[Math.floor(i/2)] ;
//         arr[Math.floor(i/2)] = arr[i];
//         arr[i] = temp;
//         i = i/2
//         console.log(Math.floor(i/2));
//     }
// }

// console.log(arr)


