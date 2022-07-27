# arrays (lists)

- items organized sequentially in memory
  - least number of rules
  - since they are stored in contiguous memory, they have the smallest footprint among data-structures

- common array operations' time complexities
  | operation | time complexity |
  |-----------|-----------------|
  | lookup (access) | O(1) |
  | push (append) | O(1) |
  | insert | O(n) |
  | delete | O(n) |

## static vs. dynamic arrays

- static arrays:
  - fixed in size
  - size of array is specified during array initialization

- dynamic arrays:
  - allows relocation of memory to add items to array

- C++ has static arrays:
  - to initialize array in C++:
  ```C++
  int a[20]
  int b[5] {1,2,3,4,5}
  ```
  - to extend static array length after being initialized,
    - it will need to be copied to a new location along with the additional array items

- in JavaScript and Python, arrays are dynamic by default
  - they automatically resize memory occupied by array based on number of items

- but there is a trade-off:
  - C++ arrays can be faster than JS/Python arrays
  - if array memory management is optimized manually by the developer

- for dyanamic arrays, append and pop time complexity is O(n)
  - instead of a static array's O(1)
  - as looping maybe needed to extend or contract the arrays