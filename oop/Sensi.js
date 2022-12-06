class Ninja {
    constructor(name,health=0,speed=3,strength=3){
        this.name=name;
        this.health=health;
        this.strength=strength
        this.speed=speed;

    }
    

    sayName(){
        console.log("Ninja Name :"+this.name);
    }
    showStats(){
  
        console.log( `Name:${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);

    }

    drinkSake(){
       this.health+=10;

    }
}

class Sensei  extends Ninja{
    constructor(name){
        super(name,200,10,10);
        this.wisdom=10;
    }
    showStats(){
        super.showStats();
        console.log("What one programmer can do in one month, two programmers can do in two months");

    }
    
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months");
    }
}

var axs = new Ninja("axsos");
// axs.showStats();
// axs.drinkSake();
// axs.showStats();

var sinsi = new Sensei("machial");
// sinsi.speakWisdom();
sinsi.showStats();

