class HashTbale {
   constructor(size) {
      this.table = new Array(size);
      this.size = size;
   }

   hashFunction(key = '') {
      let total = 0
      for(let i = 0 ; i < key.length ; i++) {
         // console.log(key.charCodeAt(i))
          total = total + key.charCodeAt(i);
      }
      let index = total % this.size;
      return index;
   }

   set(key , value) {
      let keyIndex = this.hashFunction(key);
      this.table[keyIndex] = [key, value];
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
// myHashTable.set('eng' , "England");
// myHashTable.set('nz' , "New Zeland");

// myHashTable.remove('aus');

// console.log(myHashTable.get('aus'))

myHashTable.display();



































