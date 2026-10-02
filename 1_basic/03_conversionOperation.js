let score1 = 44
let score2 = "33abc"
let score3 = null
let score4 = undefined

//const {score} = req.body //we take the data from frontend and we dont know wether it is a number or string 1
//below changing the datatype of score into number 
let valueInNum1 = Number(score1)
let valueInNum2 =Number(score2)//this will converted into number but it will give NaN because it is not a valid number
let valueInNum3 = Number(score3)
let valueInNum4= Number(score4)
//below printing type of score1,score2,score3,score4
console.log(typeof(score1)); //=>number
console.log(typeof(score2));//=>string
console.log(typeof(score3));//=>object
console.log(typeof(score4));//=>undefined
//below pritnting the value after converting into number
console.log(valueInNum1); //=>44
console.log(valueInNum2); //=>NaN
console.log(valueInNum3); //=>0
console.log(valueInNum4); //=>NaN
//below printing the type of valueInNum1,valueInNum2,valueInNum3,valueInNum4
console.log(typeof(valueInNum1)); //=>number
console.log(typeof(valueInNum2)); //=>number
console.log(typeof(valueInNum3)); //=>number
console.log(typeof(valueInNum4)); //=>number

let num = 33 
let stringNumber = String(num)
console.log(stringNumber);
console.log(typeof stringNumber);

let isLoggedIn = 1;//every value except 0,null and empty string is considered as true like 33 ,-2222 ,"23string" etc
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//=>true
console.log(typeof booleanIsLoggedIn);//=>boolean

