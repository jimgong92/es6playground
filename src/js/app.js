import LinkedList from './DataStructures/LinkedList'

let ll = new LinkedList()
ll.addToTail(1)
ll.addToTail(2)
ll.addToTail(3)
console.log(ll.size)
console.log(ll.head)
console.log(ll.tail)
let captured = ll.contains(1)
console.log(ll.removeNode(captured))

console.log(ll.contains(1))