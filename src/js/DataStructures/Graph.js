class Node{
  constructor(value){
    this.value = value;
    this.edges = new WeakMap()
    this.neighbors = []
  }
  addEdge(targetNode){
    if (this.edges.get(targetNode) === undefined){
      this.neighbors.push(targetNode)
    }
    this.edges.set(targetNode, targetNode)
  }
  removeEdge(targetNode){
    this.edges.delete(targetNode)
  }
  isConnectedTo(targetNode){
    return this.edges.get(targetNode) !== undefined
  }
  neighborMap(callback){
    let res = []
    for (let i = 0; i < this.neighbors.length; i++){
      let ni = this.neighbors[i]
      if (this.edges.get(ni) === ni){
        res.push(callback(ni))
      }
    }
    return res
  }
  neighborEach(callback){
    for (let i = 0; i < this.neighbors.length; i++){
      let ni = this.neighbors[i]
      if (this.edges.get(ni) === ni){
        callback(ni)
      }
    }
  }
}

class Graph{
  constructor(){
    this.nodes = []
  }
  addNode(value, initNeighbors){
    let newNode = Node(value)
    this.nodes.push(newNode)
  }
  removeNode(node){
    for(let i = 0; i < this.nodes.length; i++){
      if (this.nodes[i] === node){
        return this.nodes.splice(i, 1)
      }
    }
  }
}