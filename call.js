function setusername(username , email) {
    this.username = username
    this.email= email
}

function createuser(username , email , password) {
    setusername.call(this,username,email) //this parameter mendetory
     
    this.password =password
}

const chai = new createuser("chai","chaigmail.com","123")

console.log(chai);
