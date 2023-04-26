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


