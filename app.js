//variables
var person = {
    name : 'Chai',
    age : 23
};
console.log(person);

//functions
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(7, 3));

function worthless() {
    //function without a return value
}
console.log(worthless());

//anonymous function
var msg = function () {
    console.log("Hello World")
}
msg();

setTimeout(msg, 5000);