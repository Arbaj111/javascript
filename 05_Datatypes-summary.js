//Primitive 

//7 Types : String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id===anotherId);

//const bigNumber = 220059262925686


//Reference (Non Primitive)

//Array, Objects, Functions 

const heros = ["shaktiman", "Superman", "Ironman"];
let myobj =
{
    name:"Arbaj",
    age: 18,
}

const myFunction = function (){
    console.log("Hellow World");
}

//console.log(typeof heros);





//*****************************************************

//Stack (Primitive),Heap (Non-Primitive)

let myYouTubename = "Arbajalamdotcom"
let anothername = "chaiaurcode"

console.log(myYouTubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "Arbaj@google.com"
console.log(userOne.email);
console.log(userTwo.email);
