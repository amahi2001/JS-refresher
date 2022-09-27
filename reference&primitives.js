//!numbers, strings and booleans are primitive types
//this means that whenever we reassign or store a variable
//in another variable, it will copy the value (deep copy)

const number = 1;
const num2 = number;

//!arrays and objects are reference types
//this means that when they are reassigned or stored as another val:
//they will reference the address in memory of the original instance
// (shallow copy)
const person = {
    name: 'abrar'
};
const person2 = person;

//! make deep copies using spreads
const person3 = {
    name: 'abrar'
};
const person4 = {
    ...person3
}; 
