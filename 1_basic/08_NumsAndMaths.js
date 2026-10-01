//numbers And Maths 2:30:00
 const score = 400
 console.log(score);

 const balance = new Number(100)
 console.log(balance);
 
 console.log(balance.toString());//converted into string 
 console.log(balance.toFixed(2));//go to the 2 precision after decimal
 
const otherNum = 12.8966//means doing roundoff
console.log(otherNum.toPrecision(3));//give the precise value contain 3 digit including after decimal or overall digits

const hundreds = 1000000
console.log(hundreds.toLocaleString());//=>1,000,000 according to america
console.log(hundreds.toLocaleString('en-IN'));//=>10,00,000 according to India

//+++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++

console.log("Learning Mathematics");

console.log(Math);
console.log(Math.abs(-100));//its like apply mod to the number
console.log(Math.round(4.6));//it will do the round off the number 4.6
console.log(Math.ceil(4.2));//it will always give 5 if any number is slightly bigger than 4 
console.log(Math.floor(4.9));//give the lower value => 4

console.log(Math.min(4,3,6,1,9,10));//give the minimum value from the array =>1
console.log(Math.max(4, 3,6 ,1,9,10));//give max value


console.log("OPERATIONS WITH RANDOM");

console.log(Math.random());//always give a random value between 1 and 0
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);//give integer or floor value 

const min = 11
const max = 23
console.log(Math.floor(Math.random() * (max - min + 1)) + min);//number will come between 11 to 23
console.log(Math.floor(Math.random()));




































 