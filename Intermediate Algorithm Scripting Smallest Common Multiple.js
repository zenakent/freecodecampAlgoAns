// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  arr.sort((a, b) => b - a);

  let scm = arr[0]
  for (let x = arr[1]; x <= arr[0]; x++) {

    let GCD = gcd(scm, x)
    scm = (scm * x) / GCD
  }
  return scm

  //Euclidean algorithm
  function gcd(x, y) {
    return y === 0 ? x : gcd(y, x % y)
  }
}




console.log(smallestCommons([1, 13]))