// merge sorted arrays so it is still sorted after merge

// mergeSortedArrays([0,3,4,31], [4,5,30])
// [0, 3, 4, 4, 6, 30, 31]

const mergeSortedArrays = (arr1, arr2) => {

  const mergedArray = []

  if (arr1.length === 0 ) return arr2
  if (arr2.length === 0 ) return arr1

  let arr1Item = arr1[0]
  let arr2Item = arr2[0]

  let count1 = 1
  let count2 = 1
  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item)
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item)
      arr1Item = arr1[count1]
      count1++
    } else {
      mergedArray.push(arr2Item)
      arr2Item = arr2[count2]
      count2++
    }
    
  }
  


  return mergedArray
}

console.log(mergeSortedArrays([0,3,4,31], [4,5,30]))