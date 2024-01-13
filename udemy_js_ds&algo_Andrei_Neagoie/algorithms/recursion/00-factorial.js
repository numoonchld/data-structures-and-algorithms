function findFactorialRecursive(number) {
  if (number === 0) {
    return 1
  }
  return number * findFactorialRecursive(number - 1)
  
}

console.log(findFactorialRecursive(5))

function findFactorialIterative(number) {
  if (number === 0 ) return 1

  let counter = 1
  let product = 1

  while (counter <= number) {
    product = product * counter
    counter++
  }

  return product
  
}


console.log(findFactorialIterative(5))

