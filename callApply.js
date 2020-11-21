const newObject= {
    firstName: "James",
    lastName: "William",
    salary: 10000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    bill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

// console.log(newObject.firstName);
newObject.bill(1000);
newObject.bill(2000);
newObject.bill(500);
// console.log(newObject.bill(500));
console.log(newObject.salary);