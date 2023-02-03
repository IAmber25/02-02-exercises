largest = (arr) => {
    let result = arr[0]
    for(i=1; i<arr.length; i++){
        if(result < arr[i]){
            result = arr[i]
        }
    }
    return result
}
a = [45,67,12,34,82,56,89,237]
console.log(largest(a))