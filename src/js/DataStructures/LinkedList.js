class Node{
  constructor(value, prev=null, next=null){
    this.value = value
    this.prev = prev
    this.next = next
  }
}

const SIZE = new WeakMap()
const HEAD = new WeakMap()
const TAIL = new WeakMap()

class LinkedList{
  constructor(){
    HEAD.set(this, null)
    TAIL.set(this, null)
    SIZE.set(this, 0)
  }
  addToTail (value) {
    let currTail = TAIL.get(this)
    let newNode = new Node(value, currTail)
    if (HEAD.get(this) === null){
      HEAD.set(this, newNode)
    }
    else {
      currTail.next = newNode
    }
    TAIL.set(this, newNode)
    SIZE.set(this, SIZE.get(this) + 1)
  }
  removeHead () {
    currHead = HEAD.get(this)
    if (currHead === null) {
      return null
    }
    HEAD.set(this, currHead.next)
    return currHead.value
  }
  get size () { return SIZE.get(this)}
}

export default LinkedList