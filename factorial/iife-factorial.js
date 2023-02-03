
let fact = (factorial = (n) => {
    if( n === 0 || n === 1){
        return 1
    }else{
        return n*factorial(n-1)
    }
})(3);
console.log(fact)