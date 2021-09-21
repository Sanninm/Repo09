// Only change code below this line 
function myEqualFunction(num) {
    if (num === 23) {
    return "Equal"
    };
   return "Not Equal";
   }
   
   console.log(myEqualFunction(5));
   console.log(myEqualFunction(23));
   console.log(myEqualFunction("23"));
   console.log(myEqualFunction('23'));
   console.log(myEqualFunction("text"));
   // Only change code abode this line
   module.exports = myEqualFunction;