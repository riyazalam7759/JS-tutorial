//primitives data types
//types : String, Number, Boolean, null, Undefined, Symbol, BigInt
//these above are premitive data types and they are stored in stack memory can be called as value types because they are stored in stack memory and they are immutable

//reference data types=>datatype are object funtion
//types : Object, Array, Function
//these above are reference data types and they are stored in heap memory can be called as reference types because they are stored in heap memory and they are mutable

const id = Symbol('123')//its datatype is symbol and it is unique and immutable
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


console.log(typeof bigNum);//=>


//++++++++++++++++++++++++++++++++++++++++++ Memory allocation
let name1 = "riyaz"
let anotherName = name1
 console.log(anotherName);//=>riyaz
 console.log(name1);//=>riyaz

 let userOne = {
    email : "ryz@gmail.com",
    upi : "ryz@ybl"
 }
 
 let userTwo = userOne
 userTwo.email = "riyaz@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email); // both will give the new email riyaz@gmail.com
 
//is javascript dynamically typed or statically typed language ?
//read documentation for typeof operator for all above datatypes
//stack memory and heap memory are two types of memory allocation in js
//stack memory is used for storing primitive data types and heap memory is used for storing reference data types
//if stack memory is used then we got the copy of the declared variable and if heap memory is used then we got the reference of the declared variable