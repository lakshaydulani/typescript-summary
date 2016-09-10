


Typescript Summary
==================

First question goes down to is whats Typescript (TS) ?

Introduced by Microsoft, TS is basically an extension of Javascript. Its whole purpose is to let JS programmers write better and managed code. 

By managed code, what I mean is - since JS is not a compiled lanaguage like C#/Java, programmers dont get to know about the errors in their code at the compile time. Also in JS, you can change the data type of your variable anytime - this makes JS an open ground to make mistakes. 

TS does the work of compiling (transpiling) the code and providing a better code writing environment to the programmer. 

*Writing environment*? Yes TS code will eventually be transpiled to JS when you want to run it on a browser.

So advantages of TS:

  - **Type checking** - Gives you ability to define type for a variable and check for errors
  - **Syntatic sugar** - Just define a class by using TS' keyword. The compiler will take care of everything. 
  - **OOPS language goodies** - TS brings the goodness of Interfaces, Abstract class, Generics, etc to JS
 
 


----------


### Basic Types
TS has these eight basic data types - 

 1. Number - ```public amount : number = 123;```

 2. String - ```let color: string = "blue";```
 
 3. Boolean - ```let isDone: boolean = false;```

 4. Array - 
 
 ```let list: number[] = [1, 2, 3];
 // or you can define like this (using Array keyword)
let list: Array<number> = [1, 2, 3];```

5. Tuple - *Basically an array which can have different data types*
``` 
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error 
```
6. Enum - *A way to assign numeric values to a set of values*
``` enum Status { Processing, Accepted, Rejected} ```

7. Any - *This type works exactly like the normal variables in JS. TS compiler doesnt perform its type checking on these ones.*

```
let notSure: any = 4;
notSure = "maybe a string instead";
```
8. Void - 
For functions, it tells that the function doesnt return anything.
```
function warnUser(): void {
    alert("This is my warning message");
}
```

For variables, a void type variable can only be null or undefined.

``` let unusable: void = undefined; ```

----------


----------


Interfaces
-------------

Interfaces are like a contract. A class/function which implements an interface should have the properties defined in the interface.

``` 
interface  IFlyable{
    heightLimit : number;
    numberEngines? : number;
    fly() : void;
}

class Vehicle implements IFlyable{
    public name: string;
    public heightLimit : number;
    fly() : void{};
}
// Vehicle needs to have properties specified in the IFlyable
// Compiler will throw an error if the implementing class doesnt have all the properties 
// Properties suffixed with ? are optional
```

###Interface for functions

```
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// This is an interface for function that do search operation.
// It sets a guideline for functions to take two string inputs and return a bool


let Search : SearchFunc;

Search = function(a,b):boolean { // no need to reiterate that a and b are string
    return true;
}
```

### Using interface to restrict input parameter to a function

```
interface Square{
    side : number;
}


function calculateArea(sq : Square){
   return (side * side);

    // The input parameter sq implements the Interface Square 
    // This puts a condition that the input parameter
    // needs to have the property side
}


calculateArea({side:20}); // valid
calculateArea({side:20, color:'red'}); // valid
//calculateArea({side:'20'}); // error - This is one common problem when working on JS
```

> **Note:**

> - Properties suffixed with ? are optional to implement in the class.
> - Interface can inherit from other Interfaces, Classes
