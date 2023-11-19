//CODECADEMY JAVASCRIPT PRACTICE - Kelvin Weather Project 


// Task 1/2 - Create constant var (const) named kelvin, set equal to 293 - represents forcast in 293 kelvin
const kelvin = 293;
console.log(kelvin);

// Task 11 - Console.log the value of fahrenheit when kelvin = 0 - uncomment to and comment out lines 5/6 to see what happens
// const kelvin = 0;
// console.log(kelvin);

// Task 3/4 - Convert Kelvin to Celsus by subratcting 273 from the kelvin var - store result in another var, named clesuis
// celsius at 273
const celsius = kelvin - 273;
console.log(celsius);

// Task 5/6 - Declare Fahrenheit = Clesius * (9/5) + 32, store answer in var named fahrenheit - next step will be rounding number down - choose variable tpe that allows you to change it's value (let)
let fahrenheit = (celsius * (9/5) + 32);
console.log(fahrenheit);

// Task 7/8 - Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);

// Task 9/10 - Use string interpolation to replace TEMPERATURE with the value saved to fahrenheit.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Task 10 - Run your program to see your results
// Result
// kelvin = 293
// celsius = 20
// fahrenheit = 68
// fahrenheit after rounding down = 68

// Task 12 - Convert celsius to the Newton scale using the equation below
// Newton = Celsius * (33/100) - Round down the Newton temperature using the .floor() method
let newton = Math.floor((celsius * (33/100)));
// Use console.log and string interpolation to log the temperature in newton to the console
console.log(`The temperature is ${newton} degrees Newton.`);

