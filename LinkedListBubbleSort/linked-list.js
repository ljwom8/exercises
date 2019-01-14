class linkedList{
  constructor(){
    this.head = null
    this.tail = null
  }
}
class linkedListnode {
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
