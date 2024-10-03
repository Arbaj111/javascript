const user = {
    username: "Arbaj",
    LoginCount:8,
    SignedIn:true,


    getUserDetails: function(){
        console.log("Got user details from database");
    }

}
   
console.log(user.username);
console.log(user.getUserDetails());