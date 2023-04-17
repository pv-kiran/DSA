// let arr  = [100 ,91, 6, 51 , 0 , 8 , 2, 4, 7 , 10 , 22 , 17, 1001];
let arr  = [1,4,6,7,8 ,10,9];

quick_sort(arr , 0 , arr.length - 1)

function quick_sort(a = [] , start , end) {
   if(start < end) {
    // console.log(a[start])
      let q = partition(a , start , end)
    //   console.log(q);
      quick_sort(a , start , q-1);
      quick_sort(a, q+1 , end);
   } else {
      return;
   }
}

function partition(a = [] , start , end) {
    let x = a[end];
    // console.log(a[start])
    // console.log(a[end])

    let i = start  - 1
    // console.log(i)
    let temp ;
    for(j = start  ; j < end ; j++ ) {
        if(a[j] <= x) {
            i = i+1 ;
            temp = a[i];
            // console.log(temp)
            a[i] = a[j];
            a[j] = temp
        } 
    }

    temp = a[i+1];
    a[i+1] = a[end];
    a[end] = temp;
    return i+1;
}

console.log(arr)