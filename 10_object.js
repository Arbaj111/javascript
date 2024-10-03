 // singleton

 // object literals 

const mySym = Symbol("key1")


 const jsUser = {
    name :"Arbaj",
    "full name" : "Arbaj  Alam",
    [mySym] : "mykey1",
    age :"18",
    locatiom:"India",
    email:"arbaj@gmail.com",
    isLoggenIn:false,
    lastLoginDays:["Monday", "sunday"],

 }
 console.log(jsUser.email);
 console.log(jsUser["email"]);
 console.log(jsUser["full name "]);
 console.log( jsUser[mySym]);

 jsUser.email = "Arbaj@chatgpt.com"
 Object.freeze (jsUser)
 jsUser.email = "Arbaj@microsoft.com"
 console.log(jsUser);

 

