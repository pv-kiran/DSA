let arr = [23,45,1,3,12,10,9 , 122,11];

let sortedArr = merge_sort(arr);
console.log(sortedArr)

function merge_sort(arr = []) {
    if(arr.length == 1) {
        return arr;
    }

    let mid = Math.ceil( (arr.length - 1)/2);

    let left = merge_sort( arr.slice( 0 , mid))
    let right = merge_sort(arr.slice(mid , arr.length))
    
    return merge(left , right);
     
}

function merge(left = [] , right = []) {
    let i = 0 ;
    let j = 0 ;
    let k = 0 ;
    let mergedArr = [];

    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            mergedArr[k] = left[i];
            i++;
        } else {
            mergedArr[k] = right[j];
            j++;
        }
        k++;
    }

    while(i < left.length) {
        mergedArr[k] = left[i];
        i++;
        k++;
    }

    while( j < right.length) {
        mergedArr[k] = right[j];
        j++;
        k++;
    }

    return mergedArr;
}
