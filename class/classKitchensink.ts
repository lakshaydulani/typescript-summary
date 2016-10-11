// Put all inherent properties in the abstract clss
abstract class Human{
    static population : number; // make this property static to count the population. The property population doesnt belong to the instance, it rather belongs to the class itself
    name: string; // default public
    gender : number;
    walk() : void{
        console.log("walking"); // this function can be put into abstract clss because every human walks in the same way
    }
    abstract doHobbies() : void; // every person has their own hobby - so its better to make it abstract and not put any implementation fr ths function
    private sexualOrientation : boolean; // private because its private to the person and it should not be accessible outside
    protected DNA : any; // protected because its private to the person itself and available to child classes

    constructor(){}
}

class Employee extends Human{
    constructor(company : string){
// the parameters to the constructor - company - becomes the member to the class Employee
        super(); // every derived class needs to make a call to base class
        Human.population++;
    }
    doHobbies(){
        console.log('painting'); // had to implement this function
    }
}

 // var  aHuman = new Human(); //  cannot instantiate an abstract class
Human.population = 0;
var anEmployee = new Employee('Ernst & Young');
var anEmployee1 = new Employee('EY');
console.log(Human.population);
