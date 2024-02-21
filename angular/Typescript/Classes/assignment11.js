var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this._id = id;
        this._name = name;
    }
    Organizer.prototype.display = function () {
        console.log(this._id + " " + this._name);
    };
    Object.defineProperty(Organizer.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organizer.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Organizer;
}());
var Events = /** @class */ (function () {
    function Events(id, name, description, starttime, endtime) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._starttime = starttime;
        this._endtime = endtime;
    }
    Events.prototype.display = function () {
        console.log(this._id + " " + this._name + " " + this._description + " " + this._starttime + " " + this._endtime);
    };
    Object.defineProperty(Events.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "starttime", {
        get: function () {
            return this._starttime;
        },
        set: function (starttime) {
            this._starttime = starttime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "endtime", {
        get: function () {
            return this._endtime;
        },
        set: function (endtime) {
            this._endtime = endtime;
        },
        enumerable: false,
        configurable: true
    });
    return Events;
}());
var Venue = /** @class */ (function () {
    function Venue(id, name, description, address) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._address = address;
    }
    Venue.prototype.display = function () {
        console.log(this._id + " " + this._name + " " + this._description + " " + this._address);
    };
    Object.defineProperty(Venue.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (address) {
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    return Venue;
}());
var organizer = new Organizer(123, "Organizer test");
console.log(organizer.name);
organizer.display();
var events = new Events(123, "Event test", "Description test", "12:00", "14:05");
console.log(events.name);
events.display();
var venue = new Venue(123, "Venue test", "Description test", "Street 123");
console.log(venue.name);
venue.display();
