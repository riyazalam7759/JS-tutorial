//function => 4:40:00
function sayMyName(){
    console.log("r");
    console.log("i");
    console.log("y");
    console.log("a");
     
}
sayMyName//=>this is a reference of the function it show here function live
sayMyName()

function addTwoNumbers(n1,n2){//parameters
    console.log(n1+n2)
}

addTwoNumbers(3,4)//arguments

function addTwoNumbers2(n1,n2){
    let result = n1+n2
    return result
}
let res = addTwoNumbers2(4,5)
console.log(res)

function loginUserMessage(username){//username="sam" this is the default value of username
    if(username===undefined){//or if(!username)
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("riyazz"))
console.log(loginUserMessage())