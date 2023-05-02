// Selection Sort

function SelectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        for(let j=0; j< arr.length;j++){
            if(arr[i]<arr[j]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

console.log(SelectionSort([2,3,9,6,10,1]));

// Insertion Sort

function InsertionSort(arr){
    for(var i = 0; i < arr.length; i++){
        let temp = arr[i];
        let j = i - 1
        while(j>=0 && temp <= arr[j]){
            arr[j+1] = arr[j];
            j = j - 1
        }
        arr[j+1] = temp;
    }
    return arr;
}

console.log(InsertionSort([2,3,9,6,10,1]));