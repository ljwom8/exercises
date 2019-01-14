//bubble sort
function bubbleSort(list){
  for(let i=0; i < list.length; i++){
      for(j=0; j< list.length; j++){
        if(list[j] > list[j+1]){
          //swap
          let a = list[j]
          let b = list[j + 1]
          list[j] = b
          list[j + 1] = a
        }
      }
    }
    return list
}
let scores = [7,5,3,8,2,4,5,6,9];

console.log(bubbleSort(scores));
