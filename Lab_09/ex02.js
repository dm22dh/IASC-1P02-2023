var age = prompt("Please enter your age:");

var ageNumber = parseInt(age);

var currentYear = new Date().getFullYear();

// Calculating the user's birth year
var birthYear = currentYear - ageNumber;

document.write("Birth year: " + birthYear);
