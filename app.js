//this
var testVar = {
    printFName : function () {
        console.log("My name is Chai");
        console.log(this === testVar);
    }
};
testVar.printFName();

//default calling context is global
function testFunc() {
    console.log("\nThis is a global function");
    console.log(this === global)
}
testFunc();