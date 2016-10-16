// A basic interface can be set like this
function calculateArea(sq) {
    return (sq.side * sq.side);
    // The input parameter sq implements the Interface Square - This puts a condition that the input parameter
    // needs to have the property side
}
calculateArea({ side: 20 }); // valid
calculateArea({ side: 20, color: 'red' }); // valid
//calculateArea({side:'20'}); // error - This is one common problem when working on JS 
//# sourceMappingURL=basic-interface.js.map