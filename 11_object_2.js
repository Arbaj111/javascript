//const tinderUser = new object()
 const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "Arbaj"
 tinderUser.isLoggedin = false
 console.log(tinderUser);

 //console.log(tinderUser);

 const regularUser = {
    email:"some@gmail.com",
    fullname: {
userfullname:{
    firstname: "Arbaj",
    lastname: "Alam"
}
    }
 }

console.log(regularUser.fullname);

console.log(regularUser.email);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1,obj2)
//console.log(obj3);


const obj3 = {...obj1,...obj2}
console.log(obj3);


