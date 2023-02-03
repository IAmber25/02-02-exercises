a = [2,4,6,8,9,12,56,34,53,7,5]

l = (largest = function(arr){
    let result = arr[0]
    for(i=1; i<arr.length; i++){
        if(result < arr[i]){
            result = arr[i]
        }
    }
    return result
})(a);

console.log(l)