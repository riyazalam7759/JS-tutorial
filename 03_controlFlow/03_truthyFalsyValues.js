//except default will be exeuted if break is not present below that matched condition
//truthy value
const userEmail = "ryz@gmail.com"//if you give empty string then it give false but if you give empty array then it will give true 
if(userEmail){
    console.log("\n\nGot user Email ")
}
else{
    console.log("Dont have user Email")
}

/*
FALSY VALUES:
false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
*/

/*
TRUTHY VALUES:
   "0" , "false" , " "    =>anything iside string will be treated as truthy values
    [] =>empty array , {} =>empty object , function(){} => this kind of empty function is also truthy
 */
 
//+++++++++++++CHECKING EMPTY ARRAY++++++++++++++++
const userEmail2=[]
if(userEmail2.length===0) console.log(" \nuser email is empty ")

//checking empty object 
const emptyObj ={}
if(Object.keys(emptyObj).length===0) console.log("object is empty")//Object.keys(emptyObj) => this will return an array

/*
false ==0 => true
false =='' => true    empty string 
0 == '' => true       empty string
 */

//NULLISH COALESCING OPERATOR (??) : null undefined
//see only in both null and undefined 

let val1 ;
//val1 = 5 ?? 10  => here 5 will be assigned
val1 = null ?? 10 //=> here 10 will be assigned
console.log(val1)
let val2 ;
val2 = undefined ?? 15
console.log(val2) //= > 15

let val3 ;
val3 = null ?? 11 ?? 12 //=> ffirst value after null will be assigned 
console.log(val3)

//++++++++++++++++++TERNARY OPERATOR++++++++++++++===
console.log("\n\n TERNARY OPERATOR")
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("price less than 80") : console.log("price greater than 80")






