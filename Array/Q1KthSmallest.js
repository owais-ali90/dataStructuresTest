function kthSmallest(arr, k){
    if(arr.length < k){
        return -1
    }
    let pivot = arr[Math.floor((arr.length) / 2)];
    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else if(arr[i] > pivot) {
            rightArr.push(arr[i]);
        }
    }
    if(leftArr.length+1 == k){
        return pivot
    }
    else if(leftArr.length >= k){
        return kthSmallest(leftArr, k)
    }
    else{
        return kthSmallest(rightArr, k - leftArr.length-1)
    }

  return kthSmallest(leftArr, n)
}

//Test case 01:
console.log(kthSmallest([2, 7, 9, 37, -40, 50, 60, 0], 4)) 
// sorted: [-40, 0, 2, 7, 9, 37, 50, 60], k=4
//output: 7 Passed

//Test case 02:
console.log(kthSmallest([-3, 2, 1, 5, 6, 3, 9, 11, 0, 1, 4], 3)) 
// sorted: [-3, 0, 1, 1, 2, 3, 4, 5, 6, 9, 11], k=3
//output: 1 Passed

//Test case 02:
console.log(kthSmallest([1, 9, 7, 11, 3, 9, 4, 6, 20], 5)) 
// sorted: [1, 3,  4,  6, 7, 9, 9, 11, 20], k=5
//output: 7 Passed