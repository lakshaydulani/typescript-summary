// Interface is like a contract which the implementing class/entity needs to conform with.
// A class which implements the Interface will need to have the properties given in the interface
var Vehicle = (function () {
    function Vehicle() {
    }
    Vehicle.prototype.fly = function () { };
    ;
    return Vehicle;
})();
// Vehicle needs to have properties specified in the IFlyable
//# sourceMappingURL=class-interface.js.map