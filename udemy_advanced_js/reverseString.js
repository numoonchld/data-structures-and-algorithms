function reverse(str) {
  const stringArr = str.split('')
  const retArr = []
  for (let count = stringArr.length - 1; count >= 0; count--) {
    retArr.push(stringArr[count])
  }
  return retArr.join('')
}

console.log(reverse('abc'))