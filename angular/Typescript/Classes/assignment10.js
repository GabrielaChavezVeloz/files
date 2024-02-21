var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TouchScreenLaptop = /** @class */ (function () {
    function TouchScreenLaptop(ram, hd, processor) {
        this.ram = ram;
        this.hd = hd;
        this.processor = processor;
    }
    TouchScreenLaptop.prototype.scroll = function () {
        console.log("Scrolling...");
    };
    TouchScreenLaptop.prototype.click = function () {
        console.log("Clicking...");
    };
    return TouchScreenLaptop;
}());
var HPLaptop = /** @class */ (function (_super) {
    __extends(HPLaptop, _super);
    function HPLaptop(ram, hd, processor, selfRecovery) {
        var _this = _super.call(this, ram, hd, processor) || this;
        _this.selfRecovery = selfRecovery;
        return _this;
    }
    HPLaptop.prototype.scroll = function () {
        console.log("Scrolling in HP...");
    };
    HPLaptop.prototype.display = function () {
        console.log(this.ram + " " + this.hd + " " + this.processor + " " + this.selfRecovery);
    };
    return HPLaptop;
}(TouchScreenLaptop));
var DellLaptop = /** @class */ (function (_super) {
    __extends(DellLaptop, _super);
    function DellLaptop(ram, hd, processor, mobileAccess) {
        var _this = _super.call(this, ram, hd, processor) || this;
        _this.mobileAccess = mobileAccess;
        return _this;
    }
    DellLaptop.prototype.scroll = function () {
        console.log("Scrolling in Dell...");
    };
    DellLaptop.prototype.display = function () {
        console.log(this.ram + " " + this.hd + " " + this.processor + " " + this.mobileAccess);
    };
    return DellLaptop;
}(TouchScreenLaptop));
var hp = new HPLaptop("8GB RAM", "256GB SSD", "Intel i3", false);
hp.scroll();
hp.display();
var dell = new DellLaptop("16GB RAM", "256GB SSD", "Intel i7", true);
dell.scroll();
dell.display();
