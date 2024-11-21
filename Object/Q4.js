/*
Create a function that calculates the deep difference between two objects.
 For example, given:

obj1 = { a: 1, b: { c: 2, d: 3 } };
obj2 = { a: 1, b: { c: 2, d: 4, e: 5 } };
The result should be { b: { d: [3, 4], e: [undefined, 5] } }.
*/
let objDiff = function (obj1, obj2) {
  let final = {}
  let keys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])]

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    let val1 = obj1[key]
    let val2 = obj2[key]

    if (typeof val1 === 'object' && typeof val2 === 'object') {
      let result = objDiff(val1, val2)
      if (Object.keys(result).length > 0) {
        final[key] = result
      }
    } else if (val1 !== val2) {
      final[key] = [val1, val2]
    }
  }

  return final
}

const obj1 = { a: 1, b: { c: 2, d: 3 } }
const obj2 = { a: 1, b: { c: 2, d: 4, e: 5 } }

console.log(objDiff(obj1, obj2))
//output: { b: { d: [ 3, 4 ], e: [ undefined, 5 ] } }
