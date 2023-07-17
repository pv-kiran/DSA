const arr = [12, 45, 67, 32, 19, 10];

const linearSearch = (arr = [] , searchKey) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchKey) {
            return i;
        }
    }
    return 'Not found';
}

console.log(linearSearch(arr, 19
));

function recursiveLinear(arr, start , key) {
    if (arr[start] === key) {
       return {
           message: `Found at index ${start}`
       }
    }

    if (start > arr.length - 1) {
        return {
           message: 'Not Found'
       }
    }

    return recursiveLinear(arr, start + 1, key);
}


console.log(recursiveLinear(arr , 0 , 32))