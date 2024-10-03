 // if
  
 const isUserLoggedIn = true
 const tempreture = 41 


//  if(tempreture < 50){
//     console.log("less then 50");

//  } else{
//  console.log("tempreture is greter then 50 ");
//  }
//  console.log("execute");

const score = 200 
if (score > 100) {
    let power = "fly"
    console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`);  // if we are using the var then print the user fly outside of if statement



const balance = 1000

// if (balance > 500) console.log("test"), console.log("test 2");

if (balance < 500) {

    console.log("less then 500");

} else if (balance <750 ) {
    console.log("less tehn 750");
    
} else if (balance < 900 ) {
    console.log("less then 900");
    
} else {
    console.log("less then 1200");
}


const userLoggedIn = tempreture
const debitCard = true 

if (userLoggedIn && debitCard && 2==2) {  // if given statement are false then it will no give the output
    console.log("Allow to buy course");
    
}