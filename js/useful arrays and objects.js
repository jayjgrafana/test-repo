let arr = [1,2,3,4];

//get largest
arr.reduce((a,b) => {let i = a >= b ? a : b; return i})
//sum
arr.reduce((a,b) => a + b)