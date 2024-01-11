var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

constellations.push("Canis Major");
constellations.sort();

console.log(constellations);

// does not update contents of original array
var planetsSliced = planets.slice(0,5);
console.log(planetsSliced);

// does update contents of original array
planets.pop();
console.log(planets);

var galaxy = constellations.concat(planets);
console.log(galaxy);

var newStar = star.replace("polaris", "POLARIS");
console.log(newStar);
console.log(star);

var UpperCaseStar = star.toUpperCase();
console.log(UpperCaseStar);
