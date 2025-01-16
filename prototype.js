let myheros = ["spiderman" ,"thos"]

let heropower = {
    thor : "hammer",
    spiderman : "sling",

    getspiderpower : function (params) {
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.pratham = function (params) {
    console.log(`pratham here`);
    
}
Array.prototype.hello = function (params) {
    console.log("hello");
    
}

// heropower.pratham()
// myheros.pratham()
myheros.hello()
// heropower.hello()