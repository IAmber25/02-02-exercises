function sorting(arr){
    for(i=0; i<arr.length; i++){
        for(j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

a = [2,5,1,5,34,2,5,7,2]
console.log(sorting(a))