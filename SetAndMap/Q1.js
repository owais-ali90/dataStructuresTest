// Write a function that takes two sets and returns their symmetric difference (elements in either set but not both).
let setsDiff = function (set1, set2) {
  return set1.symmetricDifference(set2)
}
let a = new Set([1, 2, 4, 'a', 5, 't', 6])
let b = new Set(['u', 8, 3, 4, 't', 'a', 1])
console.log(setsDiff(a, b))
//output: Set(6) { 2, 5, 6, 'u', 8, 3 }
