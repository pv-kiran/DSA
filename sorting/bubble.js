let arr = [2,4,1,8,5,6,9,3];
// let arr = [ 1, 2, 3, 4, 5, 6, 9 , 8 ];


for(let i = 0 ; i < arr.length ; i++) {
    // let swaped = false ;
    for(let j = 1  ; j < arr.length - i ; j++ ) {
        if(arr[j] < arr[j-1]){
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
            // swaped = true
        }
    }
    // console.log(swaped);
    // if(!swaped) {
    //     break;
    // }
}

console.log(arr);