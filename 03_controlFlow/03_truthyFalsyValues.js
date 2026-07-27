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