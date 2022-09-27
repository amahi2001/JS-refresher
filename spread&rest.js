//!spread in arr

let old_arr = [1, 2, 3, 4, 5]

let new_arr = [...old_arr, 6, 7] //lets us extend arrays
console.log(new_arr);

//!spread in class
const person = {
    name: 'abrar'
}

const person2 = {
    ...person,
    age: 20
}

console.log(person2.name, person2.age);

//!rest in func

const filtering = (...args) => {
    return args.filter(arg => arg === 1);
}

console.log(filtering(1, 2, 3));