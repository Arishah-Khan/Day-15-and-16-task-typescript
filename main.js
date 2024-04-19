"use strict";
// // Question no 46
// Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
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
// Q47 -Advance Array Destructuring: Given an array of objects representing different laptops, each with properties `make`, `model`, and `year`, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
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
// Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
let pricesSet1 = [1100, 300, 1800, 600];
let pricesSet2 = [1900, 550, 1400, 800];
let combinedArray = [...pricesSet1, ...pricesSet2];
combinedArray.sort((a, b) => a - b);
console.log("Sorted Combined Prices:", combinedArray);
