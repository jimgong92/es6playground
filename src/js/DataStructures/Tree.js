class Tree{
  constructor(value){
    this.value = value;
    this.children = []
  }
  addChild(childNodes){
    if (Array.isArray(childNodes)){
      for (let i = 0; i < childNodes.length; i++){
        this.children.push(childNodes[i])
      }
      return childNodes;
    }
    this.children.push(childNodes)
    return childNodes
  }
  removeChild(childNode){
    let children = this.children
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