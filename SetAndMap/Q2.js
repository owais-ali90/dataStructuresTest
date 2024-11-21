//Given a Map, implement a function to group its values based on a callback function.
//For example, given:
//map = new Map([['a', 1], ['b', 2], ['c', 3]]);
//callback = (val) => val % 2 === 0;

//The result should be { true: ['b'], false: ['a', 'c'] }.

let groupMap = function (m, callback) {
  let final = { true: [], false: [] }
  m.entries().forEach(([key, val]) => {
    if (callback(val)) {
      final['true'].push(key)
    } else {
      final['false'].push(key)
    }
  })
  return final
}
map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
])
let checkEven = (val) => val % 2 === 0
console.log(
  groupMap(
    new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]),
    checkEven
  )
)
//output: { true: [ 'b' ], false: [ 'a', 'c' ] }
