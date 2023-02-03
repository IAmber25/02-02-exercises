a = [7,2,5,1,9]

let s = (sorting = (arr) => {
    for(i=0; i<arr.length; i++){
        for(j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                const temp = arr[j]
                arr[j]=arr[i]
                arr[i]=temp
            }
        }
    }
    return arr
})(a);

console.log(s)