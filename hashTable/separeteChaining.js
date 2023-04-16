class HashTable {
   constructor(size) {
         this.table = new Array(size);
         this.size = size;
   }

   hashFunction(key = '') {
      let total = 0 ;
      for(let i = 0 ; i < key.length ; i++) {
            total = total + key.charCodeAt(i) ;
      }
      let index = total % this.size ;
      return index;
   }

   set(key , value) {
      let index = this.hashFunction(key);
      let bucket = this.table[index];
      // console.log(bucket);
      if(!bucket) {
         this.table[index] = [[key , value]];
         // console.log(this.table[index])
      } else {
         let sameKeyIndex = bucket.find(item => item[0] === key) ;
         if(sameKeyIndex) {
            sameKeyIndex[1] = value;
         } else {
            bucket.push([key , value]);
         }
      }

      // console.log(this.table[index]);
   }

   get(key) {
      let index = this.hashFunction(key);
      const bucket = this.table[index];
      if(bucket) {
       let keyIndex =  bucket.find(item => item[0] === key) ;
       if(keyIndex) {
         console.log(keyIndex[1])
         return keyIndex[1];
       } else {
         console.log(`No value is present for thi key - ${key} `)
       }
      } else {
         console.log(`No value is present for thi key - ${key} `)
      }
   }

   remove(key) {
      let index = this.hashFunction(key);
      let bucket = this.table[index];
      if(bucket) {
         let keyIndex = bucket.find(item => item[0] === key);
         if(keyIndex) {
             bucket.splice(bucket.indexOf(keyIndex) , 1);
            //  this.size--;
            //  console.log(this.table[index]);
         } else {
            console.log(`No value is present for this key - ${key}`);
            return -1;
         }
      } else {
         console.log(`Key - ${key} doesn't exist in this table`);
         return -1;
      }
   }

   display() {
      for(let i = 0 ; i < this.size ; i++) {
        if(this.table[i]) {
           console.log(`${i} --> ${this.table[i]}`);
        }
      }
   }

   
}





const myHashTable = new HashTable(50);
myHashTable.set('ind' , 'India');
myHashTable.set('dni' , 'Bharath');
myHashTable.set('aus' , 'Australia');
myHashTable.set('eng' , 'England');
myHashTable.set('nge' , 'Britain');

myHashTable.set('sa' , 'South Africa');

myHashTable.display();



// myHashTable.get('din');

// myHashTable.remove('dni')






































// class HashTable {
//    constructor(size) {
//       this.table = new Array(size);
//       this.size = size ;
//    }

//    hashFunction(key = '') {
//       let total = 0 ;
//       for(let i = 0 ; i < key.length ; i++) {
//         total = total + key.charCodeAt(i);
//       }
//       return total % this.size;
//    } 

//    set(key,value) {
//       let index = this.hashFunction(key);
//     //   console.log(index)
//     //   this.table[index] = value;

//       let bucket = this.table[index];
//     //   console.log(bucket)
//       if(!bucket) {
//          this.table[index] = [[key , value]];
//       } else {
//         let sameKeyIndex = bucket.find(item => item[0] === key)
//         if(sameKeyIndex) {
//             sameKeyIndex[1] = value;
//         } else {
//             bucket.push([key , value]);
//         }
//       }


//    }

//    get(key) {
//         let index = this.hashFunction(key);
//         let bucket = this.table[index];
//         let keyValArr = bucket.find(item => item[0] === key);
//         if(keyValArr) {
//             return keyValArr[1];
//         } else {
//             return undefined;
//         }
//    }

//    remove(key) {
//      let index = this.hashFunction(key);
//      let bucket = this.table[index];
//      let keyValArr = bucket.find(item => item[0] === key);
//      if(keyValArr) {
//         bucket.splice(bucket.indexOf(keyValArr) , 1);
//      } else {
//          return undefined;
//      }
//    }

//    display() {
//       for(let i = 0 ; i < this.size ; i++) {
//          if(this.table[i]) {
//             console.log(`${i} --> ${this.table[i]}`);
//          }
//       }
//    }

// }



// const table = new HashTable(50);
// table.set('in' , 'INDIA');
// table.set('ni' , 'Japan');


// table.get('ni');
// table.remove('in');



// table.set('eng' , 'England');
// table.set('nz' , 'New Zeland');
// table.set('aus' , 'Australia');
// table.set('sua' , 'Sudan');



// console.log(table.get('aus'))

// console.log(table.remove('aus'))


// table.display();
