let first; //variable declaration

//immediately invoked function expression (IIFE)
//     (function(a,b) {..........})
//   (function(a,b) {............})


let balerCoder = (
    
    function(a,b) {
        first = a+b;
        return first;
    }

)(4,2);

console.log(balerCoder);