

const arr = [2, 1, 3, 4, 5, 6];

const found = arr.find(function (element) {
    return element > 1;
})

console.log(found);// 2 is output 


let result =arr.find((element => element<3));// 2 is ouput
// it returns the smallest at first index
console.log(result);