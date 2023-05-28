


// These method take parameters always 

// it find index of a array of first element if smallest and give next if greater than 
// a number 


let array =[1,2,3,4,5,6,7]

let result =array.findIndex(function(item)
{
    return item<2;
})

console.log(result);// value is at 0 index is most smallest i.e 1


//--------------------------------------

//with arrow function

let found=array.findIndex((item) => item>6);

console.log(found);// 6 