// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       }
//     }
//   }
// }

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
    return this
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: this.head
    }
    this.head = newNode
    this.length++
    return this
  }

  printList() {
    const array = []
    let currentNode = this.head

    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }

    return array
    
  }

  insert(index, value) {

    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null
    }

    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next;

    leader.next = newNode
    newNode.next = holdingPointer

    this.length++
    return this.printList()
  }
  

  traverseToIndex(index) {
    let counter = 0 
    let currentNode = this.head

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++
    }

    return currentNode
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1)
    const unwantedNode = leader.next
    leader.next = unwantedNode.next

    this.length--
    
  }

  reverse() {
    if (!this.head.next) {
      return this
    }

    let first = this.head
    this.tail = this.tail
    let second = first.next

    while(second) {
      const temp = second.next
      second.next = first;
      first = second 
      second = temp
    }

    this.head.next = null
    this.head = first
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
// console.log(myLinkedList)
console.log(myLinkedList.printList())
myLinkedList.insert(200,99)
myLinkedList.insert(2,39)
console.log(myLinkedList.printList())
myLinkedList.remove(2)
console.log(myLinkedList.printList())
myLinkedList.reverse()
console.log(myLinkedList.printList())