let first; //variable declaration

//immediately invoked function expression (IIFE)
//     (function(a,b) {..........})

let balerCoder = (
    
    function(a,x) {
        first = a+x;
        return first;
    }

)(4,2);

console.log(balerCoder);