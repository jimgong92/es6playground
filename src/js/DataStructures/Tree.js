class Tree{
  constructor(value){
    this.value = value;
    this.children = []
  }
  addChild(childNode){
    this.children.push(childNode)
    return childNode
  }
  removeChild(childNode){
    let children = CHILDREN.get(this)
    for (let i = 0; i < children.length; i++){
      if (children[i] === childNode){
        return children.splice(i, 1)
      }
    }
  }
  depthFirstLog(callback){
    for (var i = 0; i < this.children.length; i++){
      let child = this.children[i]
      callback(child)
      this.depthFirstLog(child)
    }
  }
}

export default Tree