// Only change code below this line 
function compareDifferentValues(m, n) {
    if (m === n) {
    return "Equal"
    };
   return "Not Equal";
   }
   
   console.log(compareDifferentValues(8, "8"));
   console.log(compareDifferentValues("8", 8));
   console.log(compareDifferentValues('8', 8));
   console.log(compareDifferentValues("8", "8"));
   console.log(compareDifferentValues(8, 8));
   // Only change code abode this line
   module.exports = compareDifferentValues;