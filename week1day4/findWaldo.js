// // The second argument/parameter is expected to be a function
//   var resultIndex = 0


// function findWaldo(arr, found) {
//   console.log(arr);
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == "Waldo") {
//       resultIndex += i
//       found();
//     }
//   }
// }

// function actionWhenFound() {
//   console.log("Found him! He's at index:" + resultIndex);
// }

// findWaldo(["Alice", "Bob", "Hi", "Waldo", "Winston"], actionWhenFound);


// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
  arr.forEach(function(name, index) {
     if (name == "Waldo") {
      found(index);
    }
  })
}

function actionWhenFound(index) {
  console.log("Found him! He's at index:" + index);
}

findWaldo(["Alice", "Bob", "Hi", "Waldo", "Winston"], actionWhenFound);

