let arr  = [9, 6, 5 , 0 , 8 , 2, 4, 7];

partition(arr , 0 , arr.length - 1)


function partition(a = [] , start , end) {
   let i = start - 1;
   let x = a[end] ;
   let temp ;
   for( j = 1 ; j < end ; j++) {
      if(a[j] <= x) {
         i = i + 1;
         temp = a[i] ;
         a[i] = a[j] ;
         a[j] = temp ; 
      }
   }
   temp = a[end] ;
   a[end] = a[i+1];
   a[i+1] = temp; 
}

console.log(arr)

