const userEmail = []              //"arbaj@gmail.com"

if (userEmail) {
    console.log("Got user email");
    
} else {
    console.log("Don't have userEmail");
}


// falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy values

// "0",'false'," ",[],{},function(){}


if (userEmail.length == 0) {
    console.log("Array is empty");
    
}


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}
  
let val1;
val1 = 5 ?? 10 

console.log(val1);


// terniary Operator 

const iceTeaPrice = 100
iceTeaPrice <= 80? console.log("less then 80"): console.log("more then 80")
