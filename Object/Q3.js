/*
Write a function that removes all properties from an object whose values are falsy (null, undefined, false, 0, NaN, or an empty string).
*/
let removeFalsy = function (obj) {
  for (let key in obj) {
    if (!Boolean(obj[key])) {
      delete obj[key]
    }
  }
  return obj
}
let tempObj = {
  name: 'Alex',
  age: 0,
  city: 'Sydney',
  sirname: '',
  noOfSiblings: NaN,
  isMarried: false,
  hobbies: undefined,
  height: null,
}
console.log(removeFalsy(tempObj))
//output: { name: 'Alex', city: 'Sydney' }
