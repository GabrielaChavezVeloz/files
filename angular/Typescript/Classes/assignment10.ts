class TouchScreenLaptop{
    ram:string;
    hd:string;
    processor:string;

    constructor(ram:string, hd:string, processor:string){
        this.ram = ram;
        this.hd = hd;
        this.processor = processor;
    }

    scroll(){
        console.log("Scrolling...");
    }

    click(){
        console.log("Clicking...");
    }
}

class HPLaptop extends TouchScreenLaptop{
    selfRecovery:boolean;

    constructor(ram:string, hd:string, processor:string, selfRecovery:boolean){
        super(ram, hd, processor);
        this.selfRecovery = selfRecovery;
    }

    scroll(){
        console.log("Scrolling in HP...");
    }

    display(){
        console.log(this.ram+" "+this.hd+" "+this.processor+" "+this.selfRecovery)
    }
}

class DellLaptop extends TouchScreenLaptop{
    mobileAccess:boolean;

    constructor(ram:string, hd:string, processor:string, mobileAccess:boolean){
        super(ram, hd, processor);
        this.mobileAccess = mobileAccess;
    }

    scroll(){
        console.log("Scrolling in Dell...");
    }

    display(){
        console.log(this.ram+" "+this.hd+" "+this.processor+" "+this.mobileAccess)
    }
}

var hp = new HPLaptop("8GB RAM", "256GB SSD", "Intel i3", false);
hp.scroll();
hp.display();

var dell = new DellLaptop("16GB RAM", "256GB SSD", "Intel i7", true);
dell.scroll();
dell.display();