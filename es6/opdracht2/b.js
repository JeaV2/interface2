let globalVar = 10;

let myObject = {
    "waarde": 5,
    "regularFunction": function() {
        console.log(this.waarde);
        console.log(globalVar);
    },
    "arrowFunction": () => {
        console.log(this.waarde);
        console.log(globalVar);
    },
};

myObject.regularFunction();
myObject.arrowFunction();