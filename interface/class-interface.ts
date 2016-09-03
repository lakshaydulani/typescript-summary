// Interface is like a contract which the implementing class/entity needs to conform with.
// A class which implements the Interface will need to have the properties given in the interface

interface  IFlyable{
    heightLimit : number;
    fly() : void;
}

class Vehicle implements IFlyable{
    public name: string;
    public heightLimit : number;
    fly() : void{};
}


// Vehicle needs to have properties specified in the IFlyable




