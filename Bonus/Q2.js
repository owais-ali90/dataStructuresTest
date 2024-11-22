//Data Transformation:
//Create a function that transforms a nested object with mixed keys 
//(camelCase, snake_case, and kebab-case) into one with all camelCase keys. 
//Ensure the transformation is recursive.

let changeCase = function(obj){
    Object.entries(obj).forEach(([key, val])=>{
        if(typeof val == 'object'){
            val = changeCase(val)
        }
        delete obj[key]
        key = key.replace(/([-_][a-z])/g, group =>
            group
              .toUpperCase()
              .replace('-', '')
              .replace('_', '')
          );
          obj[key] = val
    })
    return obj
}

let dailyEntries = {'applePie': 4, 'cakes':{'choclate_cake': 2, 'red_velvet': 4, 'choclate_frosting': 7}, Drinks:{'black-coffee': 5, 'latte': 1, 'coke': 15}}
console.log(changeCase(dailyEntries))
//output: {
//   applePie: 4,
//   cakes: { choclateCake: 2, redVelvet: 4, choclateFrosting: 7 },
//   Drinks: { blackCoffee: 5, latte: 1, coke: 15 }
// }