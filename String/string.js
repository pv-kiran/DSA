const myStr = 'malayalam';
console.log(myStr.length);

const mid = Math.ceil(myStr.length / 2);
let isPalindrome = true;
for (let i = 0; i < mid; i++) {
    if (myStr[i] != myStr[myStr.length - i - 1]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log(`${myStr} is a palindrome`);
} else {
    console.log(`${myStr} is not a palindrome`);
}


let newStr = '';
for (let i = 0; i < myStr.length; i++) {
    if (i === 0 || i === myStr.length - 1) {
        newStr = newStr + myStr[i].toUpperCase();
    } else {
        newStr = newStr + myStr[i];
    }
}

console.log(newStr);