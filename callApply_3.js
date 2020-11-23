const normalPerson= {
    firstName: "James",
    lastName: "William",
    salary: 10000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    // bill: function(amount){
    //     console.log(this);
    //     this.salary = this.salary - amount;
    //     return this.salary;
    // }
    bill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

// // console.log(newObject.firstName);
// normalPerson.bill(1000);
// normalPerson.bill(2000);
// normalPerson.bill(500);
// // console.log(normalPerson.bill(500));
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'Mark',
    lastName: 'Twain',
    salary: 25000,
}

const friendlyPerson = {
    firstName: 'Brad',
    lastName: 'Hogg',
    salary: 30000,
}

// normalPerson.bill();
/*
const heroBill =  normalPerson.bill.bind(heroPerson);
heroBill(2000);
heroBill(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);
*/

//bind() - method
// const friendlybill = normalPerson.bill.bind(friendlyPerson);
// friendlybill(1000);
// friendlybill(1000);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

//call() - method
// normalPerson.bill.call(heroPerson, 500, 100, 150);
// console.log(heroPerson.salary);

// normalPerson.bill.call(friendlyPerson, 500, 100, 10);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

//apply() - method
// normalPerson.bill.apply(heroPerson, 500, 400, 32); // won't work..
// normalPerson.bill.apply(heroPerson, [500, 400, 32]);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

normalPerson.bill.apply(friendlyPerson, [500, 400, 50]);
console.log(friendlyPerson.salary);