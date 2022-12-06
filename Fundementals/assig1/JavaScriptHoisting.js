// console.log(example);
// var example = "I'm the example!";
// // AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

//--------1'

console.log(hello);                                   
var hello = 'world';                                 

////=-----------------2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}



///--------------3


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


///--------------4
var food = 'chicken';
console.log(food);
eat();
console.log(food);

function eat(){
    food = 'half-chicken';
    console.log(food);
     food = 'gone';
}


//-----------------5
console.log("------------------------------");
// mean.x("s");
// console.log(food);
// var mean = function x() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);


//---------------------------6

console.log("------------------------------");

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//-------------------------7

console.log("------------------------------");

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


// /----------------------8


console.log("------------------------------");

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};

    //    var dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}