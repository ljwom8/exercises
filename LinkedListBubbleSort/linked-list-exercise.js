function printList(list){
  let item = list.head
  let message = "list:"
   while (item != null){
     message += item.data + ","
     item = item.next
   }
   console.log(message)
}

//empty list
let list = {head:null, tail:null};
//node that hasn't been added to a list
let node1 = {next:null, prev:null, data:1};
//adding node to the list
list.head = node1
list.tail = node1
printList(list)
//
let node2 = {next:null, prev:null, data:2};
//
list.tail.next = node2
node2.prev = list.tail
list.tail = node2
printList(list)
