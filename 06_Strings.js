 const name = "Arbaj" // String Decleretion
 const repoCount = 10

 //console.log(name + repoCount + "Value");

 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String ('Arbaj-hc-com')

 console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('A'));
console.log(gameName.concat('A'));


const newString = gameName.substring( 0, 5) // Give the starting number and ending number
console.log(newString);

const anotherString = gameName.slice(-5,-2)
console.log(anotherString);

const newStringOne = "  Arbaj   "
console.log(newStringOne);  // space come our code inside
console.log(newStringOne.trim());  // trim is remove the space 


const greeting = '   Arbaj Alam  ';

console.log(greeting);
// Expected output: "   Arbaj Alam   ";

console.log(greeting.trim());
// Expected output: "Arbaj Alam";


const url = "https://arbaj.com/arbaj%10alam"

console.log(url.replace('%10','-'));

console.log(url.includes('sunder'));

console.log(gameName.split('-'));
