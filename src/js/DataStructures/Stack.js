const STORAGE = new WeakMap()

class Stack{
  constructor(){
    STORAGE.set(this, [])
  }
  push(value){
    STORAGE.get(this).push(value)
  }
  pop(){
    return STORAGE.get(this).pop()
  }
  get size(){
    return STORAGE.get(this).length
  }
}

export default Stack