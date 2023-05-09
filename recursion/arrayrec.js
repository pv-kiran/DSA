// array up to a number

// function arrReturn(num , a = []) {

//     if(num < 1) {
//         return a;
//     }

//     arrReturn(num-1 , a)
//     a.push(num);
//     return a;
// }

// const myArr = arrReturn(9);
// console.log(myArr);


// function sumArr(arr = [] , sum = 0 , start = 0) {
//     if(arr.length <= start) {
//         return sum;
//     }

//     sum = sum + arr[start];

//     return sumArr(arr , sum ,start = start+1);
    
// }

// const sum = sumArr(myArr);
// console.log(sum);


// function largest(arr = [] , start = 0 , max = Number.MIN_VALUE ) {
//       if(arr.length <=  start) {
//         return max;
//       }

//       if(arr[start] > max) {
//         max = arr[start];
//       }

//       return largest(arr , ++start , max);
// }

// const res = largest(myArr);
// console.log(res);


// function secondLargest(arr = [] , start = 0 , max = Number.MIN_VALUE ,secondMax = Number.MIN_VALUE) {
//    if(arr.length <= start) {
//      return {
//         max , secondMax
//      };
//    } 
//    if(arr[start] > max ) {
//      secondMax = max ;
//      max = arr[start];
//    }

//    if(arr[start] != max && arr[start] > secondMax) {
//      secondMax = arr[start];
//    }

//    return secondLargest(arr , start = start + 1 , max , secondMax);
// }

// const res = secondLargest([10,23,9,3,12,24 ,100]);
// console.log(res);



// function linearSearch(arr = [] , start = 0 , target) {
//     if(arr.length < start) {
//         return {
//             status: -1 ,
//             message: 'Not found'
//         } ;
//     }

//     if(arr[start] === target) {
//         return {
//             message: 'Success' ,
//             position: start
//         }
//     }

//     return linearSearch(arr , ++start , target);
// }

// const res = linearSearch([10,20,1,4,3,200] , 0 , 1);
// console.log(res);






// function binarySerch(arr = [] , target , start , end) {
//     if(start > end) {
//         return {
//             message: 'Not found' ,
//             status: false
//         }
//     }

//     let mid = Math.ceil((start+end)/2);

//     if(arr[mid] === target) {
//         return {
//             message: 'Success' ,
//             status: true ,
//             position : mid
//         }
//     }

//     else if(target > arr[mid]) {
//         start = mid+1 ;
//         return binarySerch(arr , target , start , end);
//     }

//     else if(target < arr[mid]) {
//         end = mid - 1;
//         return binarySerch(arr , target , start , end);
//     }


// }


// let myArr = [10, 20, 30 , 40 ,50 , 100 , 200]

// const res = binarySerch( myArr, 200 , 0 , myArr.length - 1 );
// console.log(res);



// function primeNumbers(a = [] , start = 0) {
//     if(start > a.length - 1) {
//         return a;
//     }


//     function primeFunction(number , starter = 2 ) {
//         if(starter > number/2) {
//             console.log(number);
//             return number;
//         }

//         if(number % starter === 0) {
//             return -1;
//         }

//         return primeFunction(number , starter = starter + 1)

//     }

//     primeFunction(a[start]);


//     return primeNumbers(a , start = start + 1);

// }

// primeNumbers([12,7,8,9,11 , 113])


// reversing an array
// function revrse(a = [] , start , mid) {  
   
//     if(start >= mid) {
//         return arr;
//     }

//     temp = a[start] ;
//     a[start] = a[a.length - start - 1];
//     a[a.length - start - 1] = temp ;

//     return revrse(a , start = start+1 , mid)

// }

// let arr = [10,20,30,40,50,60,70,80];
// let mid = Math.ceil((arr.length - 1)/2);
// const revArr = revrse(arr , 0 , mid)
// console.log(revArr)




// function palindrome(arr = [] , start , mid) {

//     if(start >= mid) {
//         return {
//             success: true ,
//             message: 'Palindrome'
//         }
//     }

//     else if(arr[start] === arr[arr.length - start -1]) {
//        return palindrome(arr , start = start+1 , mid)
//     }
    
//     else {
//         return {
//             success: false ,
//             message: 'Not a palindrome'
//         }
//     }

// }

// let arr = [20,30,40,30,20];
// let mid = Math.ceil((arr.length - 1)/2);
// const res = palindrome(arr , 0 , mid);
// console.log(res);






















