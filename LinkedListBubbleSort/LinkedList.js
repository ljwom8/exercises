class LinkedList{
  constructor(){
    this.head = null
    this.tail = null
  }
  append(node){
    if (this.tail !== null){
      this.tail.next = node
    }
    node.prev = this.tail
    this.tail = node
    if (this.head === null){
      this.head = node
    }
  }
}
class Node {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}
module.exports = {
  //the property and the name are the same so a : is redundant
  LinkedList, //the same as LinkedList:LinkedList
  Node //the same as Node:Node
}
