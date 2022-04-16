function mergeSortedArrays(array1, array2) {
  if (array1.length === 0) { return array2 }
  if (array2.length === 0) { return array1 }
  
  const mergedArray = []
  
  let array1Counter = 1
  let array2Counter = 1
  let currentArray1Element = array1[0]
  let currentArray2Element = array2[0]

  while (currentArray1Element || currentArray2Element) {
    console.log(currentArray1Element, currentArray2Element)
    if (!currentArray2Element || currentArray1Element < currentArray2Element) {
      mergedArray.push(currentArray1Element)
      currentArray1Element = array1[array1Counter]
      array1Counter++
    } else {
      mergedArray.push(currentArray2Element)
      currentArray2Element = array2[array2Counter]
      array2Counter++
    }

    
    
  }
  
  
  
  return mergedArray
}

console.log(mergeSortedArrays([0, 3, 4, 31],[4, 6, 30]))
console.log(mergeSortedArrays([],[4, 6, 30]))
console.log(mergeSortedArrays([0, 3, 4, 31],[]))