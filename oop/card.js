class Card {
    constructor(name,cost){
        this.name=name;
        this.cost = cost;

    }
}


class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    reduceRes(x){
        if(this.res-x>0){
            this.res-=1;
        }
    }
    increaseRes(val){
            this.res+=val;
    }

    attack(target){
        target.reduceRes(this.power);
        console.log(`this ${this.name} decrease `+target.name +"by one ends with :"+target.res);

    }
}


class Effect extends Card {
    constructor(name,cost=0,text="",magnitude=0){
        super(name,cost);
        this.text =text; 
        this.stat="";
        //"increase target's resilience by 3";
        this.magnitude =magnitude;
    }
    raisePower(){

    }
    raiseRes(){
        
    }
    lowerPower(){

    }
    lowerRes(magnitude){
        this.magnitude=magnitude;
    }

    play( target )  
    {
        setTimeout( function() { 
            console.log("start") 
          }, 2000 );
        
        if( target instanceof Unit ) {
            if("ss".includes("resilience"))
            {
                this.stat="res";
            }
            else{
                this.stat="power";
            }
            if(this.res=="res"){
                if(this.text.includes("increase"))
                  {  target.res+=this.magnitude;console.log(this.text + this.res);
                  }
                else
                target.res-=this.magnitude;
                console.log(this.text + this.res);

        }else{
       
            if(this.text.includes("reduce"))
            {
            console.log(this.text + this.power);
            target.power-=this.magnitude;}
            else
            target.power+=this.magnitude;
            console.log(this.text + this.power);


        }

            
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
    

}

var RedBelt = new Unit("Red Belt",3,3,4);
var BlackBelt = new Unit("Black Belt",4,5,4);

var HardAlgorithm = new Effect("Hard Algorithm",2,"increase target's resilience by 3",3)
var UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2",2)

var PairProgramming	 = new Effect("Pair Programming	",3,"increase target's power by 2",2)

HardAlgorithm.play(RedBelt);

UnhandledPromiseRejection.play(RedBelt);

PairProgramming.play(RedBelt);

RedBelt.attack(BlackBelt);

console.log("end");

// const returnObjLonghand = () => {
//     return { 
//         firstName: 'John',
//         lastName: 'Wick'
//     }
// }
// /**
//   * The example below wouldn't work because the 
//   * brackets are interpreted as opening the body of the 
//   * function rather than brackets to create an object literal 
//   */
// const returnObj = () => { firstName: 'John', lastName: 'Wick' }
// // surrounding the implicit return with parenthesis solves the problem
// const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });
var foo;                 
function magic(){    
    console.log(foo);     // we log it as 'hello world'
   
    var foo;             
    foo = "hello world";  // we assign a value to our function scoped 'foo'
    console.log(foo);     // we log it as 'hello world'
}                       
foo = "bar";              // here, we assign a value to the global 'foo'
magic();                  // magic is called, the first console.log runs
console.log(foo);  