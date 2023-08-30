# Hash Tables

- pretty much every language has a variant of hash tables
  - Python: dictionary
  - JS: objects
  - Java: maps
  - Ruby: hashes

- hash function
  - simply a function that generates a value of fixed length
    - for each input it gets
  - same input gives the same output (idempotent )
  - egs: md5, sha1, sha256

- each language implements an optimal hashing function that is relatively fast
  - hashing functions that take a long time are typically used in cryptography

## hash table time complexities 

- insert: O(1)
- lookup: O(1)
- delete: O(1)
- search: O(1)

## pros and cons

- hash collisions occur when memory space is low
  - two ways to deal with collisions
    - using linked list
    - seperate chaining
    - etc.

- with fast lookups, it might sometimes take O(n) instead of O(1)


## hash tables in various languages

- implemented differently in different langauges

### JS Maps and Sets

- JS Maps allows us to have arrays and functions as keys,
  - while maintaining insertion order
  - 
- JS Objects allow for only string keys
  - do not account for insertion order

- JS Sets store only keys 