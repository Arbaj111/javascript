//*********  Number  **********

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(3));
console.log(balance.toFixed(1));

const otherNumber = 22.5926
console.log(otherNumber.toPrecision(3)); 
console.log(otherNumber.toPrecision(4)); 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); 


//******************  Maths  ***********************

console.log(Math);
console.log(Math.abs(-5));  // negative sign  are change in positive sign
console.log(Math.round(5.6));
console.log(Math.round(5.4));
console.log(Math.ceil(5.2));
console.log(Math.floor(5.2));
console.log(Math.max(5,7,8,2));
console.log(Math.min(5,7,8,2));

console.log(Math.random());
console.log((Math.random()*10) +  1 );
console.log(Math.floor(Math.random()*10) +1 );

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min);
