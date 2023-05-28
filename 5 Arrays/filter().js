



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let Filtered_Array = array.filter(function (item) {

    return item % 2 == 0;
})
console.log(Filtered_Array);// [ 2 , 4 , 6 , 8 , 10 ]

// -----------------------------------------------------


let NewArray = array.filter((item) => item % 2 != 0); // [ 1 , 3 , 5 , 7 , 9]

console.log(NewArray);