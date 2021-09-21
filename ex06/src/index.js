// Only change code below this line 
function comparisonToEqual(a) {
    if (a < 2) {
    return "Less than 5";
    };
    if (a < 9) {
    return "Less than 10";
    };
    if (a < 19) {
    return "10 or over";
    };
    if (20 < a) {        
    return "More than 20";
    };
}
   console.log(comparisonToEqual(0));
   console.log(comparisonToEqual(5));
   console.log(comparisonToEqual(17));
   console.log(comparisonToEqual(21));
   // Only change code abode this line
   module.exports = comparisonToEqual;