// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach ((item)=>{
//     console.log(item);
// })

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,]

const newNums = myNums.filter((num)=> {
       return num > 4

} )

console.log(newNums);


const newNumsTwo = []

myNums.forEach((num) => {
    if (num > 4) {
        newNumsTwo.push(num)

        
    }
})

console.log(newNumsTwo);



const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNums1 = myNumbers.map((num) => num + 10)

const newNums1 = myNumbers
                      .map((num) => num * 10)
                     .map((num) => num + 1  )
                     .filter((num) => num >= 40)
console.log(newNums1); 



// reduce 

const myNums2 = [1,2,3]
// const  myTotal = myNums2.reduce( function(acc, currval) {

//     console.log(`acc: ${acc} and currval${currval}`);
//     return acc + currval
// } , 0)

const myTotal = myNums2.reduce((acc,currval) => acc+ currval, 0)

console.log(myTotal);

