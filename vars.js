let x = 10; //only accessed in scope
var y = 11; //can be accessed within function declaration
const z = 20; //saying that this will never change

//will allow you to print g
for(i = 0; i < 10; i++){
    var g = 20
}
console.log(g);

// will throw an error
for(i = 0; i < 10; i++){
    let k = 20
}
console.log(k);