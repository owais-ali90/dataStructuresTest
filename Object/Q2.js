/*
Implement a function that finds all properties in an object whose values are functions and returns their names as an array.
*/
let funcProperties = function (obj) {
  let final = []
  for (let key in obj) {
    if (typeof obj[key] === 'function') {
      final.push(key)
    }
  }
  return final
}
console.log(
  funcProperties({
    a: 'apple',
    b: () => {
      console.log('function')
    },
    d: [1, 2, 3],
    c: () => {
      console.log('Bye!')
    },
  })
)
//Output: [ 'b', 'c' ]
