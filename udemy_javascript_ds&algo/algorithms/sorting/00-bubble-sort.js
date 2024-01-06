const arrayToSort = [5, 3, 1, 9, 8, 2, 7, 6, 4]


const bubbleSort = (inputArray) => {
  const length = inputArray.length

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (inputArray[j] > inputArray[j + 1]) {
        let tmp = inputArray[j]
        inputArray[j] = inputArray[j + 1]
        inputArray[j + 1] = tmp
      }
    }
  }  
}

bubbleSort(arrayToSort)
console.log(arrayToSort)