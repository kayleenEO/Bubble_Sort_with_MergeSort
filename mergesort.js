function split(wholeArray) {
  let end = wholeArray.length
  let middle = Math.floor(end /2)
  let left = wholeArray.slice(0, middle)
  let right = wholeArray.slice(middle, end)

return [left, right]
}


function merge(splitFunc) {
  let retArr = []
  let arr = splitFunc

  while(arr[0].length || arr[1].length){
    if(arr[0][0] <= arr[1][0]){
      retArr.push(arr[0][0])
      arr[0] = arr[0].splice(1)
    } else {
      retArr.push(arr[1][0])
      arr[1] = arr[1].splice(1)
    }
  }
  // retArr.concat(arr[1])
  return retArr
}



function mergeSort(array) {
  if(array.length < 2){
    return array
  }else {
    return mergeSort(merge(split(array)))
  }


}
