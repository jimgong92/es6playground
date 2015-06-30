import Tree from './DataStructures/Tree'

let initTrees = []

for (let i = 0; i <= 10; i++){
  initTrees.push(new Tree(i))
}

initTrees[0].addChild([initTrees[1], initTrees[2], initTrees[2]])
initTrees[1].addChild([initTrees[4], initTrees[5]])
initTrees[5].addChild([initTrees[6], initTrees[7]])
initTrees[6].addChild(initTrees[8])
initTrees[2].addChild(initTrees[9])
initTrees[9].addChild(initTrees[10])
initTrees[9].removeChild(initTrees[10])

console.log(initTrees[0])
console.log(initTrees[9].children)