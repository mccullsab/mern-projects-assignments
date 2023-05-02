// Merge arrays
function Merge(arr1, arr2){
    const mergedarr = arr1.concat(arr2);
    return mergedarr
}
// console.log(Merge([1,3,4],[3,6,7,8,9,10]))


function MergeSort(arr1,arr2){
    var mergedarr = arr1.concat(arr2);
    if (mergedarr.length > 1){
        let left = mergedarr.slice(0, Math.floor(mergedarr.length/2));
        let right = mergedarr.slice(Math.floor(mergedarr.length/2), mergedarr.length);
        console.log(left)
        console.log(right)
    }
}
console.log(MergeSort([1,3,4],[3,6,7,8,9,10]))