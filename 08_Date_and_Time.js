//  Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(typeof  myDate);

let myCreatedDate = new Date(2024,2,15)
console.log(myCreatedDate.toDateString()); 

let myTimeStamp = Date.now()
 console.log(myTimeStamp);
 console.log(myCreatedDate.getTime());
 console.log(Math.floor(Date.now()/100));

 let newDate = new Date()
 console.log(newDate.getDay());
 console.log(newDate.getMonth());
 console.log(newDate.getFullYear());


 






