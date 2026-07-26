//Arrow function 5:43:00

const addTwo = (num1 , num2)=>{
    return num1+num2//this is explicit return you have to write return keyword
}
//const addTwo = (num1 , num2)=> num1+num2    we can also write like this not need to write return 
//const addTwo = (num1 , num2)=> (num1+num2)    both are implicit return
console.log(addTwo(3,4))

const ReturnObject = (n1 , n2)=>({username:"ryz"})//for returning object you have to write paranthesis()
console.log(ReturnObject(1,2))