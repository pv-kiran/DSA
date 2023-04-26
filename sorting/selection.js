// let arr = [23 , 45 ,122  , 0 , 1, 3 , 12 , 10 , 9  , 11 , 21  , 100];
// const res = selection_sort(arr);
// console.log(res);


// selecting an element and insert it in the correct postion in the array ( largest)
// function selection_sort(a = []) {

//    for(let i = arr.length-1 ; i >= 0 ;i--) {
//       let largest = i ;
//       for(let j = i - 1 ; j >= 0 ; j--) {
//          if(a[j] > a[largest]) {
//             largest = j;
//          }
//       }
//       let temp = a[i];
//       a[i] = a[largest];
//       a[largest] = temp
//    }
//    return a;
// }





// selecting an element and insert it in the correct postion in the array ( lowest)
// function selection_sort(a = []) {
//    for(let i = 0 ; i < arr.length ; i++) {
//      let lowest = i;
//      for(let j = i+1 ; j < arr.length ; j++) {
//         if(a[lowest] > a[j]) {
//             lowest = j;
//         }
//      }
//      let temp = a[i];
//      a[i] = a[lowest] ;
//      a[lowest] = temp;
//    }

//    return a;
// }


























// const res  = selection_sort(arr);
// console.log(res)

// function selection_sort(a = []) {
//   let maxIndex;
//   for(let i = 0 ; i < arr.length    ; i++) {
//       let last = a.length - i - 1;
//       maxIndex = findLargest(a, last)
//       swap(a , maxIndex , i);
//       console.log(a[maxIndex])
//   }
//   return a;
// }

// function findLargest(a = [] , last) {
//    let maxIndex ;
//    let max = Number.MIN_VALUE;
//    for(let i = 0 ; i <= last ; i++) {
//       if(a[i] > max) {
//         max = a[i];
//         maxIndex = i;
//       }
//    }
   
//    return maxIndex

// }

// function swap(a = [] , maxIndex , i) {
//     console.log(a)
//    let temp = a[a.length - 1 -i] ;
//    console.log(temp)
//    a[a.length - 1 -i] = a[maxIndex];
//    console.log(a[a.length - 1 -i])
//    a[maxIndex] = temp;
//    console.log(a[a.length - 1 -i])

//    return a;
// }

// let arr = [23 ,0,-1, 45 ,122  , 1, 3 , 12 , 10 , 9  , 11 , 21  , 100];

// console.log(selectionSort(arr))
