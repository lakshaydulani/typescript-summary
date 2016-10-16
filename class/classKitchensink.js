var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Put all inherent properties in the abstract clss
var Human = (function () {
    function Human() {
    }
    Human.prototype.walk = function () {
        console.log("walking"); // this function can be put into abstract clss because every human walks in the same way
    };
    return Human;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(company) {
        // the parameters to the constructor - company - becomes the member to the class Employee
        _super.call(this); // every derived class needs to make a call to base class
        Human.population++;
    }
    Employee.prototype.doHobbies = function () {
        console.log('painting'); // had to implement this function
    };
    return Employee;
}(Human));
// var  aHuman = new Human(); //  cannot instantiate an abstract class
Human.population = 0;
var anEmployee = new Employee('Ernst & Young');
var anEmployee1 = new Employee('EY');
console.log(Human.population);
//# sourceMappingURL=classKitchensink.js.map