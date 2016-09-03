/*
There are seven basic types of data types in Typescript
 */
// Number
var counter = 1;
// Boolean
var isDone = false;
// Array
var list = [1, 2, 3];
var list1 = ['abc', 'cde'];
// string
var str = 'abc';
var str1 = "ABC";
// tuple
var tup = ['abc', 1];
tup = ['1', 1];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var blueNumber = Color.Blue;
// Any
// Lets you escape from Typescript's type checking; Any type variables behave like normal JS variables
var anything = 'a';
anything = 1; // convert it into any type just like you do in JS
anything = true;
// void
// Void data type can be given to functions that dont return anything, and variables
function alertUser() {
    alert("YO!");
}
var voidType = null;
voidType = undefined;
//voidType = 1; This statement will break
//# sourceMappingURL=basicTypes.js.map