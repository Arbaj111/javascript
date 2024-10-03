const user = {
    username:"Arbaj",
    price:999,


    welcomeMessage:function() {
        console.log(`${this.username} , welcome to website `);
        // console.log(this);
        
    }

}
user.welcomeMessage()
user.username = "sam"
 user.welcomeMessage()       // {} curly brases means MT object

console.log(this);



function chai() {
    let username = "Arbaj"
    console.log(this.username);
    
}
chai()

const coffe = () => {
    console.log(this);
}
coffe ()


// const addTwo = (num1,num2) => {
// return num1 + num2
// }
// console.log(addTwo(5,5));

// const addTwo = (num1,num2) =>  (num1 + num2)

const addTwo = (num1,num2) =>  ({username:"Arbaj"})
    
    console.log(addTwo(5,5));

    // const myArray = [2,5,3,7,8,]
    // myArray.forEach() 