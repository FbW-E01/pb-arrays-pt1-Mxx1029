// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
const euroCities = [
    "Paris",
    "Madrid",
    "Prague",
    "Warsaw",
    "London",
    "Athens"
]
const city = euroCities[1];

console.log(euroCities);
console.log(city);

// 2. Change the first item in the array to "Berlin".

euroCities[0] = "Berlin";
console.log(euroCities);

// 3. Print the length of the array "euroCities".

console.log(euroCities.length);

// 4. Remove the last item of the array "euroCities". 

const lastEuroCity = euroCities.pop();

console.log(lastEuroCity);
console.log(euroCities);

// 5. Use an array method to add "Budapest" to the euroCities array. 

euroCities.unshift("Budapest");

console.log(euroCities);

// 6. **Bonus**: Remove the second and third items from the euroCities array. 

const twoEuroCities = euroCities.splice(1, 2);

console.log(twoEuroCities);
console.log(euroCities);

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

const asianCities = [
    "Seoul",
    "Hongkong",
    "Ulan Bator",
    "Bejing",
    "Istanbul",
    "Bangkok"
];

// 8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  

const threeAsianCities = asianCities.slice(1, 4);

console.log(threeAsianCities);
console.log(asianCities);

// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).  

const worldCities = euroCities.concat(asianCities);

console.log(worldCities);

// 10. Reverse the order of worldCities.

worldCities.reverse();

console.log(worldCities);

// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto". 

worldCities.splice(2, 1, "Toronto")

console.log(worldCities);

// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(1, 0, "Washington");

console.log(worldCities);

// 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string. 
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
// Expected Outputs: 
// "Berlin , London, Bangkok, Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh" 

const worldCitiesString1 = worldCities.join(", ");

const worldCitiesString2 = worldCities.join("+");

console.log(worldCitiesString1);
console.log(worldCitiesString2);

// **Bonus**

// 1. Write a program to reverse the string: "Hello World". 

const olleh = "Hello World";
const arr = olleh.split("");
arr.reverse();
const dlrow = arr.join("")
console.log(dlrow);

// OR chained:

console.log(olleh.split("").reverse().join(""));

// **Extra Practice**

// Print the results to the console.

// 1. Make an array of your siblings' names or your favorite movie characters' names.
const siblingsNames = ["Matthias", "Sebastian"];
// 2. Make an array of your parents' names.
const parentsNames = ["Renate", "Thomas"];
// 3. Combine these two arrays.
const familyNames = parentsNames.concat(siblingsNames);
// 4. Add your pets' names.
const familyAndPetsNames = familyNames.concat("Amadeus", "Trudi", "Trudi", "Bommel", "Hans", "Fritz", "Watson", "Krümel");
console.log(familyAndPetsNames);
// 5. Reverse the order of the array.
familyAndPetsNames.reverse();
console.log(familyAndPetsNames);
// 6. Access one of your parents' names.
console.log(familyAndPetsNames[familyAndPetsNames.length - 1]);
// 7. Update the name of one of your parents. 
familyAndPetsNames[familyAndPetsNames.length - 2] = "Armin Johannes Thomas";
console.log(familyAndPetsNames);