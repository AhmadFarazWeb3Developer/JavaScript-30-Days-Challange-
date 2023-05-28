// Loose check operator


console.log("01 : ", 4 == 4); // true
console.log("02 : ", 'hello' == 'hello'); // true
console.log("03 : ", 14 == '14'); // true
console.log("04 : ", 1 == true); // true
console.log("05 : ", [1, 5, 10] == [1, 5, 10]); // false
let items1 = ['hat', 'cat', 'map'];
let items2 = ['cat', 'cat', 'lap'];
console.log("06 : ", items1 > items2); // true because the array's first item's character ASCI would be checked 
items1 = ['hat', 'cat', 'map'];
console.log("07 : ", items1 == items1); // true


