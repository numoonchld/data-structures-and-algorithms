const strings = ['a','b','c','d','e']
/*
- on 32-bit systems:
  - 4 memory shelves is allocated per item in the array 
  - the 'string' array takes up 4 * 5 = 20 bytes of storage
*/ 

// access
console.log(strings[2]) //O(1): no looping through memory

// push: add element to end of array
strings.push('f') //O(1) for static array; O(n) for dynamic array
console.log(strings)

// pop: remove last element
strings.pop() //O(1) for static array; O(n) for dynamic array
strings.pop() //O(1) for static array; O(n) for dynamic array
console.log(strings)

// unshift: add item to beginning of array
strings.unshift('x') // O(n): looping to shift index after new element at the beginning
console.log(strings)

// splice: insert element in between array
strings.splice(2, 0, 'alien') // O(n/2) i.e. O(n): looping to shift index of elements after inserted element
console.log(strings)

// delete: remove in-between element in array
strings.splice(2, 1) // O(n): looping to shift index
console.log(strings)
