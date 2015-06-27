import Queue from './DataStructures/Queue'

let q = new Queue()

for (let i = 0; i < 10; i++){
  q.enqueue(i)
}

console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
