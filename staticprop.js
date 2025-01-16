class user {
    constructor(username){
        this.username =username
    }

    logme(){
        console.log(`username:${this.username}`);
        
    }
    static createid(){  //static means dosen't use this info
        return `123`
    }

}
const pratham = new user("pratham")
// console.log(pratham.createid());


class teacher extends user {
    constructor(username, email){
        super(username)
        this.email =email

    }
}

const iphone = new teacher("iphone","phone.com")

console.log(iphone.createid());



