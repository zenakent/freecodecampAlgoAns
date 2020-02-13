// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  let arr3 = [...arr1, ...arr2]
  let newArr = [];
  // Same, same; but different.
  //DRY MAUI

  // for (let x of arr1) {
  //   if (!arr2.includes(x)) {
  //     newArr.push(x)
  //   }
  // }
  // for (let x of arr2) {
  //   if (!arr1.includes(x)) {
  //     newArr.push(x)
  //   }
  // }

  // function dry(a, b) {
  //   for (let x of a) {
  //     if (!b.includes(x)) {
  //       newArr.push(x)
  //     }
  //   }
  // }

  // dry(arr1, arr2)
  // dry(arr2, arr1)

  return arr3.concat(arr2).filter(x => !arr1.includes(x) || !arr2.includes(x))

}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);