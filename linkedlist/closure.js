
let e = 10
function multiply(a){
    return function(b)
        {
            return function(c)
            {
                return function(d){
                    return(a*b*c*d*e)
                }
            }
            
        }
}
    
function outer(a) {
    function inner(d){
        return a*d
    }
    return inner(a*2)
}

console.log("the result is:-\n")
console.log(multiply(2)(3)(6)(4))

console.log(outer(10))