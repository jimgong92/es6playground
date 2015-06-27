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
  addToTail(value){
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
  removeHead(){
    let currHead = HEAD.get(this)
    if (currHead === null) {
      return null
    }
    HEAD.set(this, currHead.next)
    SIZE.set(this, SIZE.get(this) - 1)
    return currHead.value
  }
  contains(value){
    let currNode = HEAD.get(this)
    while (currNode !== null){
      if (currNode.value === value) {
        return currNode
      }
      currNode = currNode.next
    }
    return false
  }
  removeNode(node){
    if (node.prev === null && node.next === null){
      if (HEAD.get(this) === node){
        //ONLY NODE
        HEAD.set(this, null)
        TAIL.set(this, null)
        return true
      }
      //node not in list
      return false 
    }
    if (node.prev !== null){
      node.prev.next = node.next
    }
    else {
      HEAD.set(this, node.next)
    }
    if (node.next !== null){
      node.next.prev = node.prev
    }
    else {
      TAIL.set(this, node.prev)
    }
    SIZE.set(this, SIZE.get(this) - 1)

    return true;
  }
  insertAfter(value, node){
    newNode = new Node(value, node, node.next)
    node.next.prev = newNode
    node.next = newNode
  }
  insertBefore(value, node){
    newNode = new Node(value, node.prev, node)
    node.prev.next = newNode
    node.prev = newNode
  }
  get size () { return SIZE.get(this)}
  get head () { return HEAD.get(this)}
  get tail () { return TAIL.get(this)}
}

export default LinkedList