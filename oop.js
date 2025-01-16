const user =  {
    username:"pratham",
    logincount: 3,
    singin :true,

    getusername: function(){    
        console.log(`username: ${this.username}`); 
    }
}

//console.log(user.getusername());

//new
//create empty object

function User(username , logincount ,singin) {
    this.username = username
    this.logincount = logincount;
    this.singin = singin;

    this.greeting = function (params) {
        console.log(`welcome ${this.username}`);
        
    }
}

const userone = new User("pratham" , 8 , true)

console.log(userone);
