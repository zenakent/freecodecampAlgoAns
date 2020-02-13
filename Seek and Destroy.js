// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  // Remove all the values
  let ans = arr.filter(x => !args.includes(x))
  console.log(ans)
  return ans
}

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5)