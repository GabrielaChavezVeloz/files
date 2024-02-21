class Organizer{
    private _id:number;
    private _name:string;

    constructor(id:number, name:string){
        this._id = id;
        this._name = name;
    }

    display(){
        console.log(this._id+" "+this._name);
    }

    get id():number{
        return this._id;
    }

    set id(id:number){
        this._id = id;
    }

    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name = name;
    }
}

class Events{
    private _id:number;
    private _name:string;
    private _description:string;
    private _starttime:string;
    private _endtime:string;

    constructor(id:number, name:string, description:string, starttime:string, endtime:string){
        this._id = id;
        this._name = name;
        this._description = description;
        this._starttime = starttime;
        this._endtime = endtime;
    }

    display(){
        console.log(this._id+" "+this._name+" "+this._description+" "+this._starttime+" "+this._endtime);
    }

    get id():number{
        return this._id;
    }

    set id(id:number){
        this._id = id;
    }

    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name = name;
    }

    get description():string{
        return this._description;
    }

    set description(description:string){
        this._description = description;
    }

    get starttime():string{
        return this._starttime;
    }

    set starttime(starttime:string){
        this._starttime = starttime;
    }

    get endtime():string{
        return this._endtime;
    }

    set endtime(endtime:string){
        this._endtime = endtime;
    }
}

class Venue{
    private _id:number;
    private _name:string;
    private _description:string;
    private _address:string;

    constructor(id:number, name:string, description:string, address:string){
        this._id = id;
        this._name = name;
        this._description = description;
        this._address = address;
    }

    display(){
        console.log(this._id+" "+this._name+" "+this._description+" "+this._address);
    }

    get id():number{
        return this._id;
    }

    set id(id:number){
        this._id = id;
    }

    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name = name;
    }

    get description():string{
        return this._description;
    }

    set description(description:string){
        this._description = description;
    } 

    get address():string{
        return this._address;
    }

    set address(address:string){
        this._address = address;
    } 
}

var organizer = new Organizer(123,"Organizer test");
console.log(organizer.name);
organizer.display();

var events = new Events(123,"Event test", "Description test", "12:00", "14:05");
console.log(events.name);
events.display();

var venue = new Venue(123,"Venue test", "Description test", "Street 123");
console.log(venue.name);
venue.display();