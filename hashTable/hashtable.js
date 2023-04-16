class HashTbale {
   constructor(size) {
      this.table = new Array(size);
      this.size = size;
   }

   hashFunction(key = '') {
      let total = 0
      for(let i = 0 ; i < key.length ; i++) {
          total = total + key.charCodeAt(i);
      }
      let index = total % this.size;
      return index;
   }


   set(key , value) {
      let keyIndex = this.hashFunction(key);
      this.table[keyIndex] = value;
   }

   get(key) {
      let keyIndex = this.hashFunction(key);
      if(this.table[keyIndex]) {
         return this.table[keyIndex];
      } else {
         return undefined;
      }
   }

   remove(key) {
      let keyIndex = this.hashFunction(key);
      this.table[keyIndex] = undefined;
   }

   display() {
      for(let i = 0 ; i < this.size ; i++) {
         if(this.table[i]) {
            console.log(`${i} --> ${this.table[i]}`);
         }
      }
   }

}

const myHashTable = new HashTbale(50);
myHashTable.set('ind' , "India");
myHashTable.set('aus' , "Australia");
myHashTable.set('eng' , "England");
myHashTable.set('nz' , "New Zeland");

myHashTable.remove('aus');

console.log(myHashTable.get('aus'))

myHashTable.display();



































// class HashTable {
//    constructor(size) {
//       this.table = new Array(size);
//       this.size = size;
//    }

//    hashFunction(key = '') {
//     console.log(key);
//      let total = 0;
//      for(let i = 0 ; i < key.length ; i++) {
//         total = total + key.charCodeAt(i);
//      }
//      return total % this.size;
//    }

//    set(key , value) {
//        let index = this.hashFunction(key);
//        this.table[index] = value;
//    }

//    get(key) {
//      let index = this.hashFunction(key);
//      console.log(this.table[index]);
//      return this.table[index];
//    }

//    remove(key) {
//      let index = this.hashFunction(key);
//      this.table[index] = undefined;
//    }

//    display() {
//       for(let i = 0 ; i < this.table.length ; i++) {
//         if(this.table[i]) {
//             console.log(i , this.table[i] );
//         }
//       }
//    }

// } 



// const table = new HashTable(50);
// table.set('in' , 'India');
// table.set('eng' , 'England');
// table.set('aus' , 'Australia');

// table.display();










// table.get('aus');
// console.log(table);
// console.log(table)
// const table = new HashTable(50);
// table.set('in' , 'INDIA');
// table.set('eng' , 'England');
// table.set('nz' , 'New Zeland');
// table.set('aus' , 'Australia');
// table.set('sua' , 'Sudan');
// console.log(table.get('aus'))
// console.log(table.remove('aus'))
// table.display();