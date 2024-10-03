// function sayMyName(){

// console.log("A");
// console.log("R");
// console.log("B");
// console.log("A");
// console.log("J");
// }

//sayMyName()

function addTwoNumbers (number1,number2){
console.log(number1 + number2);

}
addTwoNumbers(5,5)
addTwoNumbers(3, "a")
addTwoNumbers (3,null)


function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };

  console.log(mycar.make); // "Honda"
  myFunc(mycar);
  console.log(mycar.make); // "Toyota"
  

  function loginUserMessage (username){
    if(username == undefined){
        console.log("please enter a username");
        return

    }
    return  `${username} just logged in `
  }

 console.log(loginUserMessage ("Arbaj"));
 console.log(loginUserMessage (""))
console.log(loginUserMessage ())




function calculateCartPrice (val1, val2 , ...num1){ // ... means rest operator it take all value given by you 
    return num1

}
console.log(calculateCartPrice (200,300, 400,500));


const user = {
    username: "Arbaj",
    price : 399

}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

handleObject(user)