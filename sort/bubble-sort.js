function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //SWAP!
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
bubbleSort([37, 35, 29, 8]);
bubbleSort([37, 35, 29, 8, 10, 12, 30, 127]);
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

var arr = [];

for (var i = 0; i < 1000; i++) {
  arr.push(Math.round(Math.random() * 200000));
}

bubbleSort(arr);

// ===============================================================

var startTime = performance.now();

bubbleSort(arr); // <---- measured code goes between startTime and endTime

var endTime = performance.now();

console.log(
  `Call to doSomething took ${Math.round((endTime - startTime) / 1000)} seconds`
);
console.log(arr);
