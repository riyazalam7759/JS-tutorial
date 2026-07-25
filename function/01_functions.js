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

console.log("\n\nSECOND PART OF THE FUNCTION")

function calculateCartPrice(...num1){//here ... it is called as rest operator
   return num1
}
console.log(calculateCartPrice(200,300,400))//=>it will give the array of these numbers

console.log("\n\nPASSING OBJECT AS PARAMETER")
const user ={
    username2:"riyaz",
    id:"123abc"
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username2} and id is ${anyObject.id}`)
}
handleObject(user)//or
/*  WE CAN ALSO PASS DIRECT OBJECT
handleObject({
username2:"riyaz",
id:"123abc"
})
 */

const myNewArray = [200 , 400 , 600]
function returnSecondValue(getArray){
    return getArray[2]
}
//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,1000]))