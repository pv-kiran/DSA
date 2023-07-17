// largest element in an array
const arr = [1, 3, 2, 6, 119, 231];

let largest = Number.MIN_VALUE;
for ( let i = 0; i < arr.length; i++ ) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(largest);

// smallest number
let smallest = Number.MAX_VALUE;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log(smallest);

// second largest
let large = Number.MIN_VALUE, secondLarge = Number.MIN_VALUE;
for (let i = 0; i < arr.length ; i++) {
    if (arr[i] > large) {
        secondLarge = large;
        large = arr[i];
    }
    if (arr[i] > secondLarge && arr[i] != large) {
        secondLarge = arr[i];
    }
}

console.log(large)
console.log(secondLarge)


// most repeating element in an Array
const repArr = [12, 12, 34, 3, 2, 1, 1, 12, 4, 3];
let mostRepeating = Number.MIN_VALUE;
let mostRepeatingCount = Number.MIN_VALUE;
for (let i = 0; i < repArr.length; i++) {
    let count = 1;
    for (let j = 0; j < repArr.length; j++) {
        if (i != j) {
            if (repArr[i] === repArr[j]) {
                count++
            }
        }
    }
    console.log(count , repArr[i])
    if (count > mostRepeatingCount) {
        mostRepeatingCount = count;
        mostRepeating = repArr[i];
    }
}

console.log(mostRepeating);
console.log(mostRepeatingCount)


// most consqtve number

let testConsequitive = [12, 12, 34, 34, 56, 56, 56, 56, 7, 7, 7, 1];
let mostCons = Number.MIN_VALUE;
let consnumber;
for (let i = 0; i < testConsequitive.length; i++) {
    let count = 1;
    for (let j = i + 1; j < testConsequitive.length; j++) {
        if (testConsequitive[i] != testConsequitive[j]) {
            break;
        }
        count++;
    }
    if (count > mostCons) {
        mostCons = count;
        consnumber = testConsequitive[i];
    }
} 

console.log(consnumber)