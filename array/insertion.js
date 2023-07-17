// const arr = [1, 2, 3, 4, 5, 6];

// insert at end
// arr[arr.length] = 7;
// console.log(arr)

// arr.push(8);
// console.log(arr);


// ... inserting at given postion

// const insertArr = insert([1, 2, 3, 4, 5, 6], 0 , 1)
// console.log(insertArr)

// function insert(arr = [], number, position) {
//     if (position < 0 || position > arr.length) {
//         return 'Operation invalid';
//     }
//     for (let i = arr.length; i >= position; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[position] = number;
//     return arr;
// }

// inserting a number after even numbers

// let arr = [1, 3, 5, 8, 7, 10];
// console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         insert(arr, i, 0);
//         i++;
//     }
// }


// function insert(arr = [], position, number = 0) {
//     for (let i = arr.length; i >= position; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[position] = number;
// }
// console.log(arr);


// inserting after prime number

// let arr = [1, 2, 3, 5, 7, 11, 13, 17, 9, 4];
// let primeFlag ;
// for (let i = 0; i < arr.length; i++) {
//     primeFlag = true;
//     if (arr[i] === 1) {
//         primeFlag = false;
//     }
//     for (let j = 2; j <= Math.ceil(arr[i] / 2); j++) {
//         if ( arr[i] % j === 0) {
//             primeFlag = false;
//             break;
//         }
//     }
//     if (primeFlag) {
//         console.log(arr[i])
//         insert(arr, i+1, 10);
//     }
// }


// function insert(arr = [], position, number) {
//     console.log(position);
//     for (let i = arr.length; i >= position; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[position] = number;
// }
// console.log(arr);


