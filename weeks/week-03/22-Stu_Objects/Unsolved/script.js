//WRITE YOUR CODE BELOW

var customerDrink = {
    name: "coffee",
    sugars: 2,
    isReady: false,
};

console.log(customerDrink);

if (customerDrink.isReady) {
    console.log("Ready for pick-up: " + customerDrink.name + " with " + customerDrink.sugars + " sugars.");
} else {
    console.log("Still in order queue: " + customerDrink.name + " with " + customerDrink.sugars + " sugars.");
}