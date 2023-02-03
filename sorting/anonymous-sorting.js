sorting = function(arr){
    for(i=0; i<arr.length; i++){
        for(j=i+1; j<arr.length; j++){
            if(a[i]>a[j]){
                const temp = a[j]
                a[j]=a[i]
                a[i]=temp
            }
        }
    }
    return arr
}

a = [2,5,1,8,4,6]
console.log(sorting(a))