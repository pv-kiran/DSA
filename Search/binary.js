const arr = [10, 20, 30, 40, 50, 60];

let start = 0;
let end = arr.length;
let mid;

// normal function method
function binarySerch(arr = [] , searchKey) {
    while (start < end) {
        console.log('Hello');
        let mid = Math.floor((start + end) / 2);
        console.log(mid);
        if (arr[mid] === searchKey) {
            return mid;
        }
        else if (searchKey > arr[mid]) {
            start = mid;
        }
        else {
            end = mid;
        }
    }
    return 'Not found'
}

console.log(binarySerch(arr, 40));


// recursive method
function binarySearch(arr = [] ,start , end , key) {
    if (start > end) {
      return {
        message: 'Not found'    
      }   
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === key) {
        return {
            index: mid,
            message: 'Found'
        }
    }

    if (key > arr[mid]) {
       return binarySearch(arr , mid + 1, end , key )
    } 

    if (key < arr[mid]) {
        return binarySearch(arr, start, mid - 1, key);
    }
}

console.log(binarySearch(arr , 0 , arr.length - 1 , 10))


