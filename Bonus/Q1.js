let objsInArray = function (arr, s) {
  return arr.map((obj) => {
    let temp = {}
    for (let key in obj) {
      if (s.has(key)) {
        temp[key] = obj[key]
      }
    }
    return temp
  })
}

let data = [
  { product: 'Laptop', price: 1200, brand: 'Dell', stock: 50 },
  { product: 'Smartphone', price: 800, brand: 'Apple', stock: 200 },
  { product: 'Tablet', price: 400, brand: 'Samsung', stock: 100 },
  { product: 'Monitor', price: 300, brand: 'LG', stock: 75 },
]
let keys = new Set(['product', 'price'])

console.log(objsInArray(data, keys))
//output: [
//   { product: 'Laptop', price: 1200 },
//   { product: 'Smartphone', price: 800 },
//   { product: 'Tablet', price: 400 },
//   { product: 'Monitor', price: 300 }
// ]
