// ///       returning an array  ////////

// let arr = [];
// function number(n) {
//     if(n === 1) {
//         arr.unshift(1);
//         return arr
//     }

//     arr.unshift(n);
//     // console.log(arr);

//     return number(n-1);
// }

// const a = number(9);
// console.log(a);



// / print values ///

// let str = '';

// function print(n) {

//     if(n === 1) {
//         str = str + ' ' +`${n}`;
//         return str;
//     }

//     str = str + ' ' +`${n}`;


//     return print(n-1);

// }

// const res = print(10);
// console.log(res)




// function printForward(n) {
//     if(n == 0) {
//         return ;
//     }

//     printForward(n-1);
//     console.log(n);
// }

// printForward(9);


// factorial

// function factorial(n) {
//    if(n < 2) {
//     return 1;
//    }
//    return n * factorial(n-1);
// }

// const res = factorial(5);
// console.log(res);

// sum 

// function sum(n) {
//     if(n === 0) {
//         return 0;
//     }
//     return n + sum(n-1);
// }

// console.log(sum(10));

// // sum of digits

// function sumDigits(n) {
//     if(n === 0) {
//         return 0;
//     }

//     return (n%10) + sumDigits(Math.floor(n/10)) 
// }


// const res = sumDigits(1342);
// console.log(res)



// reverse a number

// let sum = 0;
// let number = 5445;
// function reverse(n) {

//     if(n == 0) {
//         return;
//     }

//     let rem = n % 10  ;
//     sum = sum * 10 + rem;
//     reverse(Math.floor(n/10));

// }

// reverse(number);

// if(sum === number) {
//     console.log('Palindrome');
// } else {
//     console.log('Not plaindrome');
// }



// function countZero(number , count) {
//     if(number === 0) {
//         return count;
//     }

//     rem = (number % 10)  ;
//     // console.log(rem);
//     if(rem === 0) {
//        return countZero( Math.floor(number / 10 ) , count+1)
//     }
//     // console.log(count);

//     return countZero(Math.floor(number / 10 ) ,count);


//     // let c = countZero( Math.floor(number / 10 ) ,count)
//     // console.log(c)
    
// }

// const n = countZero(12000 , 0);
// console.log(n)
// console.log(n);

























