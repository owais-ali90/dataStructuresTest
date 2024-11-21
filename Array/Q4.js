/*
Create a function that takes an array of integers and returns a 
new array containing only those elements that have a frequency greater 
than a given threshold.
(For example, given [1, 2, 2, 3, 3, 3] and threshold 1, the output should 
be [2, 3].)
*/
let moreThanThreshold = function(arr, n){
    let record = {}
    arr.forEach((ele, i)=>{
        if(record[ele] !== undefined){
            record[ele] = record[ele] + 1
        }
        else{
            record[ele] = 1
        }
    })
    return Object.keys(record).filter(key=> record[key] > n).map(item =>parseInt(item, 10))
}
//Test case 01:
console.log(moreThanThreshold([1, 2, 2, 3, 3, 3], 1))
//output: ['2', '3']