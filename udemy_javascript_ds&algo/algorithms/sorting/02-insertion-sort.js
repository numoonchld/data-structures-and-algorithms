const arrayToSort = [5, 3, 1, 9, 8, 2, 7, 6, 4]

function insertionSort(array) {
  const length = array.length

  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // move to first position
      array.unshift(array.splice(i,1)[0])
    }
    else {
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j-1] && array[i] < array[j]) {
          array.splice(j,0,array.splice(i,1)[0])
        }
      }
    }
  }
  
}

insertionSort(arrayToSort)
console.log(arrayToSort)