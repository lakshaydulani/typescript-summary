/*
There are seven basic types of data types in Typescript
 */

// Number
let counter : number = 1;

// Boolean
let isDone : boolean = false;

// Array
let list : number[] = [1,2,3];
let list1 : Array<string> = ['abc','cde'];

// string
let str : string = 'abc';
let str1: string = "ABC" // works with double and single quotes

// tuple
let tup:[string,number] = ['abc',1];
tup = ['1',1];

// Enum
enum Color {
    Red,
    Blue,
    Green
}
let blueNumber: number = Color.Blue;


// Any
// Lets you escape from Typescript's type checking; Any type variables behave like normal JS variables
let anything:any = 'a';
anything = 1; // convert it into any type just like you do in JS
anything = true;


// void
// Void data type can be given to functions that dont return anything, and variables

function alertUser() : void{
    alert("YO!");
}

var voidType : void = null;
voidType = undefined;
//voidType = 1; This statement will break
