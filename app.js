//Prototyping
function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        this.life -= 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}

var Kelvin = new User();
var Ruth = new User();
Kelvin.name = "Kelvin";
Ruth.name = "Ruth";

Kelvin.giveLife(Ruth);
console.log("Kelvin: " + Kelvin.life);
console.log("Ruth: " + Ruth.life);

//use prototype to add additional methods/functions to classes

User.prototype.uppercut = function (targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " uppercut " + targetPlayer.name);
};

Ruth.uppercut(Kelvin);
console.log("Kelvin: " + Kelvin.life);
console.log("Ruth: " + Ruth.life);

//You can also add properties to all objects
User.prototype.magic = 60;
console.log("Magic property:")
console.log("Kelvin: " + Kelvin.magic);
console.log("Ruth: " + Ruth.magic);