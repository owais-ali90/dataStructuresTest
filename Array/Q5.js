/*
Write a function that rotates an array to the right by k positions. 
For example, rotating [1, 2, 3, 4, 5] by 2 positions results in 
[4, 5, 1, 2, 3].
*/
let rotateArray = function(arr, n){
    while(n>0){
        arr.unshift(arr.pop())
        n--
    }
    return arr
}

console.log(rotateArray([1, 2, 3, 4, 5], 2))
//output: [4, 5, 1, 2, 3]