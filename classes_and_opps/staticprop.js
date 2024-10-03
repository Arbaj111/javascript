class User {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username:${this.username}`);
    }

   static createId(){
     return`123`
    }
}

const arbaj = new User("arbaj")
console.log(arbaj.createId())