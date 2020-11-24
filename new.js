class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}


const heroPerson = new Person('James', 'William', 25000);//object creation with help of class template;
console.log(heroPerson);

const friendlyPerson = new Person('Jack', 'Ma', 5461256123);
console.log(friendlyPerson);


/*
// before ES6 way(theOldWay)
function Person1 (firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName - lastName;
    this.salary = salary;
}

const oldPerson = new Person1('James', 'William', 25000);
console.log(oldPerson);
*/