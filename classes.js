//properties are variables in classes
// methods are functions in classes

class human {
    // using constructor to define property
    constructor(){
        this.gender = 'male'
    }

    // defining property without constructor
    species = 'sapiens' 


    printGender = () => {
        console.log(this.gender);
    }

    printSpecies = () => {
        console.log(this.species);
    }
}

class person extends human {
    constructor(){
        super(); //this calls constructor of parent class
        this.name = 'Abrar'
    }

    name = 'abrar';
    printName = () => {
      console.log(this.name)  
    }
}

let abrar = new person();
abrar.printName();
abrar.printGender();
abrar.printSpecies();