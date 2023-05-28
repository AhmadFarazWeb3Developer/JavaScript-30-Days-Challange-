
// Loose Uneqaulity


console.log( 10 != 20); // true
console.log (10 != '10'); // false
console.log(1 != true); // false
[1, 5, 10] != [1, 5, 10]; // true
let items = ['hat', 'cat', 'map'];
items != items; // fal


/*In this case, the arrays [1, 5, 10] and [1, 5, 10] may have the same elements with the same values, 
but they are two distinct arrays with different references in memory*/