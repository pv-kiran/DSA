let arr = [23 , 45 ,122 , 1 , 3 , 12 , 10 , 9  , 11 , 21];

let sortedArr = insertion_sort(arr);
console.log(sortedArr);

function insertion_sort(a = []) {
    for(let i = 1 ; i < a.length ; i++) {
        let key = a[i];
        j = i - 1;
        console.log(j)
        while(j >= 0 && a[j] > key) {
            a[j+1] = a[j];
            j--;
        }
        a[j+1] = key;
    }
    
    return a;
}
