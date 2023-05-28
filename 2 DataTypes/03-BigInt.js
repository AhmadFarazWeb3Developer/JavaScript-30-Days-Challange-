let Bignumber = BigInt(12304050504030300030303);
console.log(Bignumber);



let num1 = BigInt(12345678901234567890);
let num2 = BigInt(98765432109876543210);

let sum = num1 + num2;
let difference = num2 - num1;
let product = num1 * num2;
let quotient = num2 / num1;

console.log(sum); // Output: 111111111111111111100n
console.log(difference); // Output: 86419753208641975320n
console.log(product); // Output: 1219326311370217952655459039875605943700n
console.log(quotient); // Output: 8n
/*
In JavaScript, the n suffix in the output of a BigInt value 
represents that the value is a BigInt object. 
The n is used to distinguish BigInt values from
 regular JavaScript numbers */