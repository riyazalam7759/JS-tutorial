


const id = Symbol('123')
const  anotherId = Symbol('123')

console.log(id === anotherId); //false 
const bigNum = 482364767534875734n

const heros = ["shakti" , "Ironman" , "thor"] //reference type array

let myObj ={
    name: "riyaz",
    age: 23,
    home:"bihar"
} //this is an object

const myFunction = function(){
    console.log("hello this is function");
    
}//this is function


console.log(typeof bigNum);


//++++++++++++++++++++++++++++++++++++++++++ Memory allocation
let name1 = "riyaz"
let anotherName = name1
 console.log(anotherName);
 console.log(name1);

 let userOne = {
    email : "ryz@gmail.com",
    upi : "ryz@ybl"
 }
 
 let userTwo = userOne
 userTwo.email = "riyaz@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email); // both will give the new email riyaz@gmail.com
 
 
 