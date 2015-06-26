class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

const FIRST = new WeakMap()
const LAST = new WeakMap()
const SIZE = new WeakMap()

class Queue{
  constructor(){
    FIRST.set(this, null)
    LAST.set(this, null)
    SIZE.set(this, 0)
  }
  enqueue (value) {
    let newNode = new Node(value)
    let queueLen = SIZE.get(this)
    if (queueLen === 0){
      FIRST.set(this, newNode)
    }
    else {
      TAIL.get(this).next = newNode
    }
    TAIL.set(this, newNode)
    SIZE.set(this, queueLen + 1)
  }
  dequeue () {
    let queueLen = SIZE.get(this)
    if (queueLen === 0){
      return null
    }
    let first = HEAD.get(this)
    if (queueLen === 1){
      TAIL.set(this, null)
    }
    HEAD.set(this, first.next)
    SIZE.set(this, queueLen - 1)
    return first
  }
  get size () { return SIZE.get(this) }

}

export default Queue