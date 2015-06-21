const STORAGE = new WeakMap()

class Stack{
  constructor(){
    STORAGE.set(this, [])
  }
  enqueue(value){
    STORAGE.get(this).push(value)
  }
  dequeue(){
    return STORAGE.get(this).pop()
  }
  get size(){
    return STORAGE.get(this).length
  }
}

export default Stack