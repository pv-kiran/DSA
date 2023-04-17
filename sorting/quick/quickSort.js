let arr  = [1,4,6,7,8 ,10,9];


quick_sort(arr , 0 , arr.length - 1);

function quick_sort(a = [] , start , end) {
   if(start >= end) {
     return ;
   }
   let low = start ;
   let high = end;
   let mid = Math.ceil((low+high) / 2) ;
   let pivot = a[mid];
   while( start <= end ) {
      while(a[start] < pivot ) {
         start++ ;
      } 
      while(a[end] > pivot) {
         end--;
      }
      if(start <= end) {
         let temp = a[start] ;
         a[start] = a[end];
         a[end] = temp;
         start++;
         end--;
      }
   }
   quick_sort(a , low , end);
   quick_sort(a , start , high);
}


console.log(arr);