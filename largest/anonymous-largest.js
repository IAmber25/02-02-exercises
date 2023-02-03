largest = function (arr){
    let result = arr[0]
    for(i=1; i<arr.length; i++){
        if( result < arr[i]){
            result = arr[i]
        }
    }
    return result
}

a = [1,2,5,7,78,43,98,12,45,86]
console.log(largest(a))