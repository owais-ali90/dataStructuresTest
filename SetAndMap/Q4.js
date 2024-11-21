//Implement a function that checks if a Set is a subset of another Set.
let isSub = function (set1, set2) {
  return set1.isSubsetOf(set2)
}
let setsDiff = function (set1, set2) {}
let a = new Set([1, 2, 4, 'a', 5, 't', 6])
let b = new Set(['u', 8, 3, 4, 't', 'a', 1])
console.log(isSub(a, b))
//output: false
