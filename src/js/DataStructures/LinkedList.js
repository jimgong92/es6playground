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
    SIZE.set(this, 0)
  }
  addToTail (value) {
    if (HEAD.get(this) === undefined){}
    let currTail = TAIL.get(this)
    currTail.next = new Node(value, currTail)
    TAIL.set(this, currTail.next)
    SIZE.set(this, SIZE.get(this) + 1)
  }
  removeHead (value) {
    HEAD
  }
  get size () { return SIZE.get(this)}
}

export default LinkedList