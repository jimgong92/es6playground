class Node{
  constructor(value) {
    this.value = value
    this.children = []
  }
  addChild(child){
    this.children.push(child)
  }
  removeChild(child){
    for (let i = 0; i < this.children.length; i++){
      if (this.children[i] === child){
        this.children.splice(i, 1)
        return
      }
    }
  }
}

class Tree{
  
}