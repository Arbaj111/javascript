let a = 10 
const b = 20
var c = 30 

console.log(a);
console.log(b);
console.log(c);


function one(){
    const username = "Arbaj"

    function two (){
        const webSite = "youtube"
        console.log(username);


    }
    // console.log(webSite);

     two()
}
one () 

if (true) {
    const username = "Arbaj"
    if (username==="Arbaj") {
        const website = "youtube"
        console.log(username + website);
        
    }
    
    //console.log(website);
}

// console.log(username);

// ********** intersting ************


console.log(addone(10));
function addone (num){
    return num + 1
}

const addtwo = function(num){
    return num + 2
}
addtwo(10)