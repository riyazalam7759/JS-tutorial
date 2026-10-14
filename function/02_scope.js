//SCOPE => 5:6:00
let a = 100
if(true)
{
    let a=10
    const b=20
    var c=30
    console.log("inner a :",a)//=>10 inner a will be printed
}
console.log("global a:" ,a);//=>100 global a will be printed 
//console.log(b)=>wont be printed bcause b is executable only inside the if condition 
console.log(c)//=> but c is a global 

function one(){
    const username ="riyaz"
    function two(){
        const website="youtube"
        console.log(username)
    }
    two()
    //console.log(website)//=>website will not be printed 
}
one()//=> this all above is called closure

//++++++++++++++++++++++++interesting++++++++++++++++++++++

console.log(addOne(3))//this will run
function addOne(num){
    return num + 1
}

//addTwo(3)//=>this will give the error it depends on how you are declaring a function
const addTwo = function(num){//this is as variable sometimes called expression
    return num + 2
}

/*
if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // 10
console.log(b); // ReferenceError
console.log(c); // ReferenceError

Why does this happen?

var has function scope, not block scope.
let has block scope.
const has block scope.
*/

