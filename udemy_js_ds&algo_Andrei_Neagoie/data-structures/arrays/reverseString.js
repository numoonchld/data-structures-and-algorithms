// create a function that reverses a string:
// 'Hi My name is Raghavendra'

const str = 'Hi My name is Raghavendra'

function reverse(str) {
  return str.split('').reverse().join('')
}

function reverse2(str) {

  const backwards = []

  for (let count = str.length; count > 0; count--) {
    backwards.push(str[count - 1])
  }

  return backwards.join('')
}

const reverse3 = str => [...str].reverse().join('')

console.log({str},reverse(str))
console.log({str},reverse2(str))
console.log({str},reverse3(str))