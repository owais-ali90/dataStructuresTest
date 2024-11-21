//Write a function that converts a flat object to a nested one based on its keys. For example,

// { 'a.b.c': 1, 'a.b.d': 2, 'e': 3 }
// should be converted to:
//{ a: { b: { c: 1, d: 2 } }, e: 3 }

let changeForm = function(obj){
    let tempArr = Object.entries(obj)
    let final = {}

    for(let i = 0; i < tempArr.length; i++){
        let tempObj = final
        let temp = (tempArr[i][0]).split('.')

        while(temp.length-1 > 0){
            let temp2 = temp.shift()
            if( tempObj[`${temp2}`] === undefined){
                tempObj[`${temp2}`] = {}
            }
            tempObj = tempObj[temp2]
        }
        tempObj[`${temp.shift()}`] = tempArr[i][1]
    }
    return final
}
//Test case 01
console.log(changeForm({'p.a':[5, 6, 7], 'p.g':9, 'p.f.z':[-1, -2]}))//output -> {p: {a: [5, 6, 7], g: 9, f: {z: [-1, -2]} } }
// Passed

//Test case 02
console.log(changeForm({'a.b.c': 1, 'a.b.d': 2, 'e': 3}))//output -> {a: {b: {c: 1, d: 2}}, e: 3}
//Passed

//Test case 03
console.log(changeForm({'a':1, 'b.c.d':'Hello', 'b.e':7, 'f.g': 3}))//output -> {a: 1, b: {c: {d: 'Hello'}, e: 7}, f: {g: 3}}
//Passed

//Test case 04
console.log(changeForm({'a.b.c': 11, 'a.b.d.e': 'Bye', 'a.f.g': 3}))//output -> {a: {b: {c: 11, d: {e: "Bye"}}, f: {g: 3}}}
//Passed