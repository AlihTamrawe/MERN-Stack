function human(name,age){
    var h={};
    h.name=name;
    h.age=age;
    return h;
}
var low = human("ali",25);
console.log(low.name+" "+low.age);



function stat(a,b) {

    return [
        a+b,
        a+b/2,
        a-b
    ]
}
const [sum,avg,sub] =stat(200,100);
console.log(sum,avg,sub);



let user  = {
    Name:"Test",
    fun1:()=>{
        console.log(user.Name)
    },
    fun2: function(){
        console.log(this.Name)
    }
}
user.fun1();
user.fun2();