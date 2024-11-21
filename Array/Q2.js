//Implement a function that splits an array into chunks of a given size. 
//For example, given [1, 2, 3, 4, 5] and a size of 2, 
//return [[1, 2], [3, 4], [5]]. 
//Ensure the function handles edge cases like empty arrays or 
//chunk sizes larger than the array length.

let cutIntoChunks = function(arr, n){
    if(arr.length < n || arr.length == 0 || n == 0){
        return arr
    }
    let final = []
    let temp = []
    while(arr.length){
        temp.push(arr.shift())
        if(temp.length === n){
            final.push(temp)
            temp = []
        }
    }
    if(temp.length){
        final.push(temp)
    }
    return final
}
//Test case 01
console.log(cutIntoChunks([1, 2, 3, 4, 5], 2))
//output: [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ] Passed

//Test case 02
console.log(cutIntoChunks([1, 5, 9, 7, 3, 50, 60, 2], 5))
//output: [ [ 1, 5, 9, 7, 3 ], [ 50, 60, 2 ] ] Passed

//Test case 03
console.log(cutIntoChunks([3, 2, 1, 5, 4], 7))
//output: [ 3, 2, 1, 5, 4 ] return the original array as n > arr.length
