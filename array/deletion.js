///// ............. Deletion of first element ................ //////////

// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length ; i++) {
//     arr[i] = arr[i + 1];
// }
// arr.length--;

// console.log(arr);


// let arr = [1, 2, 4, 5, 6, 7, 10, 18, 19];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         deleteElement(arr, i);
//         i--;
//     }
// }

// function deleteElement(arr = [] , position) {
//     for (let j = position; j < arr.length ; j++) {
//         arr[j] = arr[j + 1];
//     }
//     arr.length--;
// }

// console.log(arr)


// removal of duplicates
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     let count = 1
//     for (let j = 0; j < arr.length; j++) {
//         if (i != j) {
//             if (arr[i] === arr[j]) {
//                 deleteElement(arr, j);
//                 count++;
//             }
//         }
//     }
//     if (count > 1) {
//         deleteElement(arr, i);
//     }
// }


// function deleteElement(arr = [], position) {
//     for (let i = position; i < arr.length; i++) {
//         arr[i] = arr[i + 1];
//     }
//     arr.length--;
// }

// console.log(arr)



// find the unique element logics and freuency of elements
// let arr = [10, 15, 20, 30, 40, 10, 15, 20];
// let uniqueFlag , count;
// let frequencyArr = [];
// for (let i = 0; i < arr.length; i++) {
//     uniqueFlag = true;
//     count = 1;
//     for ( j = 0; j < arr.length ; j++) {
//        if (i != j) {
//            if (arr[i] === arr[j]) {
//                count++;
//            }
//        }
//     }
//     let frequency = {
//         number: arr[i],
//         count: count
//     }
//     frequencyArr.push(frequency);
// }

// console.log(frequencyArr);
