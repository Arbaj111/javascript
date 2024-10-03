const arr = [1, 2, 3, 4, 5,]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}


// maps 

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('Fr', "France")

console.log(map);
 



const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(val){
//     console.log(val);
//  } )

//  coding.forEach((item)=>{
//     console.log(item);
//  })
 

 function printMe(item){
    console.log(item);
 }

 coding.forEach(printMe)


 const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"


    },

    {
        languageName: "java",
        languageFileName: "java"


    },

    {
        languageName: "python",
        languageFileName: "py"


    },
 ]

 myCoding.forEach((item)=>{
    console.log(item.languageName);
 })

 myCoding.forEach((item)=>{
    console.log(item.languageFileName);
 })