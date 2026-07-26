//Arrow function 5:43:00

const addTwo = (num1 , num2)=>{
    return num1+num2//this is explicit return you have to write return keyword
}
//const addTwo = (num1 , num2)=> num1+num2    we can also write like this not need to write return 
//const addTwo = (num1 , num2)=> (num1+num2)    both are implicit return
console.log(addTwo(3,4))

const ReturnObject = (n1 , n2)=>({username:"ryz"})//for returning object you have to write paranthesis()
console.log(ReturnObject(1,2));

//++++++Immediate Invoked Function Expression (IIFE)+++++++
//we want immediate execution of function
//before making arrow function add a semi colon ;

(function chai(){//this is a named IIFE
    console.log(`DB connected`);
})();

(()=>{
    console.log(`DB connected two`)
})();

(function func(){
    console.log(`DB connected three`)
})();

((name)=>{//simple or unnamed IFFE
    console.log(`DB connected four ${name}`)
})('Riyazz');//argument given to the arrow function









