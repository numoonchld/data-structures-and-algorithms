const arrayToSort = [5, 3, 1, 9, 8, 2, 7, 6, 4]

function selectionSort(arrayToSort) {
  const length = arrayToSort.length

  for (let i = 0; i < length; i++) {
    let min = i
    let temp = arrayToSort[i]

    for ( let j = i + 1; j < length; j++) {
      if (arrayToSort[j] < arrayToSort[min]) {
        min = j
      }
    }

    arrayToSort[i] = arrayToSort[min]
    arrayToSort[min] = temp
    
  }

  return arrayToSort
}

selectionSort(arrayToSort)
console.log(arrayToSort)