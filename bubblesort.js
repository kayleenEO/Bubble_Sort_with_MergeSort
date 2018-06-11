function bubbleSort(array) {
  var sorted = false;

  while (!sorted) {
    let tempVar;
    let end = array.length - 1;
    let count = 0;
    for (var i = 0; i < end; i++) {
      if (array[i] > array[i + 1]) {
        let swapped = swap(array[i], array[i + 1]);
        array[i] = swapped[1];
        array[i + 1] = swapped[0];
        tempVar = array[i + 1];
        array[i + 1] = array[i];
        array[i] = tempVar;
        count++;
      }
    }

    if (count === 0) {
      sorted = true;
    }
    end--;
  }

  return array;
}

function swap(elem1, elem2) {
  return [elem2, elem1];
}
