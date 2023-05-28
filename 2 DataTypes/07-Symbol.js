

// EXP 01 
const mySymbol = Symbol('My Symbol');


// EXP 02  
const myObject = {
    [mySymbol]: 'This is a private property'
};

console.log(mySymbol);
console.log(myObject[mySymbol]);
