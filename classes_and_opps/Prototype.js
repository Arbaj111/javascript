  let myHeros = ["thor","spiderman"]

  let heroPoer = {
 thor: "hammer",
 spiderman: "sling",

 getSpiderPower: function(){
    console.log(`spidy power is ${this.spiderman}`);
 }
  }

  Object.prototype.arbaj=function(){
    console.log(`arbaj is present in all objects`);
  }

Array.prototype.heyarbaj= function () {
  console.log(`arbaj says hello`);
}


  myHeros.arbaj()
myHeros.heyarbaj()



const user = {
  name:"chai",
  email:"chai@google.com"
}

const teacher = {
  makeVideos:true
  
}
   
const teachingSupport = {
  isAvailable:false

}
   
const TASupport = {
  makeAssignment:'JS assignment',
  fullTime:true,

__proto__:teachingSupport
}
   
teacher.__proto__=user


// modren syntax

Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername = "ChaiaurCode     "

String.prototype.truelength=function(){
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.truelength()
"arbaj".truelength()
"IceTea".truelength()