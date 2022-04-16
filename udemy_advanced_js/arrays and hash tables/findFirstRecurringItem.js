/* 
Google Question
---------------------------------------------------------
Find first recurring item in array

Given:
- [2,5,1,2,3,5,1]
Returns:
- 2

Given:
- [2,1,1,2,3,5]
Returns:
- 1

Given:
- [2,3,4,5]
Returns:
- undefined

*/



function findFirstRecurringItem(input) {

  let temp = {}

  for (let count = 0; count < input.length ; count++) {
    let currentItem = input[count]
    if (temp[currentItem]) { return currentItem }
    else { temp[currentItem] = true }   
  }

  return undefined
  
} 
// Time Complexity - O(n)
// Space Complexity - O(n)


console.log(findFirstRecurringItem([2,5,1,2,3,5,1]))
console.log(findFirstRecurringItem([2,1,1,2,3,5]))
console.log(findFirstRecurringItem([2,3,4,5]))