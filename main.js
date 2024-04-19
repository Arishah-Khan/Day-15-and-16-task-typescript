"use strict";
// Question no 43
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
let Magician = ["Harry Blaine", "Dynamo", "David Copperfield", "Albus Dumbledore"];
function copyArray(magicArray) {
    return [...magicArray];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The Great " + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
const copyMagicianArray = copyArray(Magician);
make_great(copyMagicianArray);
console.log("\n\nThis is Original Array");
show_magicians(Magician);
console.log("\n\nThis is modified copy of the Array");
show_magicians(copyMagicianArray);
// Question no 44
// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function makeSandwich(item) {
    console.log(`Making a sandwich with  the following the following items: \n`);
    item.forEach(element => console.log("-" + element));
    console.log("\n Enjoy your tasty sandwich! \n");
}
// Now call the function three items with three different arguments.
makeSandwich(["Grilled Chicken", "Mint Chutney", "lettuce"]);
makeSandwich(["Potatoes", "Flatbread", "Onion", "Egg"]);
makeSandwich(["Cheese", "Butter", "Mayo", "Capsicum", "Chicken"]);
// Question no 45
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
function carInformation(manufacturer, modelName, ...optional) {
    let car = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...optional));
    return car;
}
;
let carResult = carInformation("Honda", "Honda Civic", { "Color": "Black" }, { "Features": ["Heated Power side mirrors", "Traffic Sign Recognition"] });
console.log(carResult);
// Question no 46
// 46. Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
let laptop = {
    make: "Asus",
    model: "X550",
    year: 2020,
    describe: function () {
        console.log(`This is an  ${this.make} ${this.model} laptop from  ${this.year}.`);
    }
};
laptop.describe();
// Question no 47
// 47. Advance Array Destructuring: Given an array of objects representing different laptops, each with properties `make`, `model`, and `year`, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
let laptops = [
    {
        make: "Apple",
        model: "Macbook Pro",
        year: 2020
    },
    {
        make: "Dell",
        model: "XPS",
        year: 2020
    },
    {
        make: "Lenovo",
        model: "Thin Book",
        year: 2020
    }
];
let [firstLaptop, secondLaptop] = laptops;
console.log(firstLaptop);
console.log(secondLaptop);
// Question no 48
// 48 Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
let pricesSet1 = [1100, 300, 1800, 600];
let pricesSet2 = [1900, 550, 1400, 800];
let combinedArray = [...pricesSet1, ...pricesSet2];
combinedArray.sort((a, b) => a - b);
console.log("Sorted Combined Prices:", combinedArray);
