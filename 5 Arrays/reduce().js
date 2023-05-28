


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let Reduce = array.reduce(function (total, next) {
    return total + next;
})
console.log(Reduce);// 55


// -------------------------------

let newReduce = array.reduce((total, next) => total - next);

console.log(newReduce); // -53