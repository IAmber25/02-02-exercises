function largest(arr){
    let result = arr[0]
    for(i=1; i<arr.length; i++){
        if( result < arr[i]){
            result = arr[i]
        }
    }
    return result
}
let a = [4,5,2,1,7,0,9]
console.log(largest(a))