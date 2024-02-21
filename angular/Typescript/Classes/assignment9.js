var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer.prototype.display = function () {
        console.log(this.id + " " + this.name);
    };
    return Organizer;
}());
var Events = /** @class */ (function () {
    function Events(id, name, description, starttime, endtime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.starttime = starttime;
        this.endtime = endtime;
    }
    Events.prototype.display = function () {
        console.log(this.id + " " + this.name + " " + this.description + " " + this.starttime + " " + this.endtime);
    };
    return Events;
}());
var Venue = /** @class */ (function () {
    function Venue(id, name, description, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
    Venue.prototype.display = function () {
        console.log(this.id + " " + this.name + " " + this.description + " " + this.address);
    };
    return Venue;
}());
var organizer = new Organizer(123, "Organizer test");
organizer.display();
var events = new Events(123, "Event test", "Description test", "12:00", "14:05");
events.display();
var venue = new Venue(123, "Venue test", "Description test", "Street 123");
venue.display();
