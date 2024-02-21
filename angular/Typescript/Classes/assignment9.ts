class Organizer{
    id:number;
    name:string;

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }

    display(){
        console.log(this.id+" "+this.name);
    }
}

class Events{
    id:number;
    name:string;
    description:string;
    starttime:string;
    endtime:string;

    constructor(id:number, name:string, description:string, starttime:string, endtime:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.starttime = starttime;
        this.endtime = endtime;
    }

    display(){
        console.log(this.id+" "+this.name+" "+this.description+" "+this.starttime+" "+this.endtime);
    }
}

class Venue{
    id:number;
    name:string;
    description:string;
    address:string;

    constructor(id:number, name:string, description:string, address:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }

    display(){
        console.log(this.id+" "+this.name+" "+this.description+" "+this.address);
    }
}

var organizer = new Organizer(123,"Organizer test");
organizer.display();

var events = new Events(123,"Event test", "Description test", "12:00", "14:05");
events.display();

var venue = new Venue(123,"Venue test", "Description test", "Street 123");
venue.display();