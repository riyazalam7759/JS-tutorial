//Date and Time in JS =>2:54:00

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate);//=>this is an oject

let myCreatedDate = new Date(2023 , 0 ,24 , 5,3)//in JavaScript month start from 0 zero
console.log(myCreatedDate.toLocaleString());//i have created this date 

let myCreatedDate2 = new Date("2023-01-14")//another syntax of Date
console.log(myCreatedDate2.toLocaleString());

//++++++++++++++++++++++++++++++++TIME STAMPS+++++++++++++++++++++++++++++++++

console.log("\n\nLEARNING ABOUT TIME STAMP");

let myTimeStamp = Date.now()
console.log(myTimeStamp);//give the time in milisecond
console.log(Math.floor(Date.now()/1000));//changes into second














