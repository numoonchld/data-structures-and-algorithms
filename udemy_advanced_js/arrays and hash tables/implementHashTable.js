class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  set(key, value) {
    let hashAddress = this._hash(key)

    // accommodate hash collision
    if (!this.data[hashAddress]) {
      this.data[hashAddress] = []
    } 
    
    this.data[hashAddress].push([key,value])
    return this.data
  }

  get(key) {
    let hashAddress = this._hash(key)
    const hashSlot = this.data[this._hash(key)]
    if (hashSlot) {
      const hashItem = hashSlot.filter( item => item[0] === key)
      return hashItem ? hashItem[0][1] : undefined   
    }
    else {
      return undefined
    }
  }

  keys() {
    const keysArray = []
    for (let count = 0; count < this.data.length; count++) {

      if (this.data[count]) {
        
        if (this.data[count].length === 1) {
          keysArray.push(this.data[count][0][0])
        }
  
        if (this.data[count].length > 1) {
          for (let innerCount = 0; innerCount < this.data[count].length; innerCount++) {
            keysArray.push(this.data[count][innerCount][0])
          }
        }
      }
      
    }
    return keysArray
  }
  
  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes', 10000))
console.log(myHashTable.get('grapes'))
console.log(myHashTable.set('apples', 9))
console.log(myHashTable.get('apples'))
console.log(myHashTable.set('oranges',2))
console.log(myHashTable.keys())