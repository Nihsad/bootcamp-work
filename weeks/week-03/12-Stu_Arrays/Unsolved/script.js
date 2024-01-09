// WRITE YOUR CODE HERE

var names = ["Morgan", "Silvia", "Rebeca"]

console.log("Welcome to the class " + names[0] + ".");
console.log("Welcome to the class " + names[1] + ".");
console.log("Welcome to the class " + names[2] + ".");

names[0] = "Lux";

if(names.includes("Lux")) {
    console.log(names[0] + " is in class!");
}

console.log(names.length);