"use strict"//this will help us to write clean code and avoid some error in js and treat all JS code as modern js code

// alert(3 + 4); => we are using nodejs not brower so it wont show alert this will give errorr

let namee = "riyaz"
let age = 23
let isLoggedIn = false
let state;//=> i have declared the variable but not assigned any value so it will show undefined if i try to print it

/*
type of data types
number => ranges 2 to power 53
bigint 
string => can be written inside dual or single quot
boolean => true/false
null => it is stand alone value . representation of empty value and it is an object
undefined => value is not assigned till yet
symbol => used for unique 
 
all above are premitive data types

object
 */
console.log(typeof null);//=>object
console.log(typeof undefined);//=>undefined
console.log(typeof namee);//=>string
console.log(typeof age);//=>number
console.log(typeof isLoggedIn);//=>boolean