
/*The nullish coalescing operator will return the right hand side 
of the operation if the left side is either null or undefined. 
This operator can be used to return a default value in cases of 
 a null or undefined value.*/


console.log( null ?? 37); // 'default value'
console.log(false ?? 'default value'); // false
console.log(5 >2  ?? 23); // true