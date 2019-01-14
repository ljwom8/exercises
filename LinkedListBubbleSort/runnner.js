const LinkedListMod = require('./LinkedList.js')
const LinkedList = LinkedListMod.LinkedList
const Node = LinkedListMod.Node

let list = new LinkedList()
let node = new Node("a")

list.append(node)

console.log (JSON.stringify(list))
