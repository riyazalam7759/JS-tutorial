//Date and Time in JS =>2:54:00

let myDate = new Date()
console.log(myDate);//=>give the current date and time
console.log(myDate.toString());//=>give the current date and time in string format
console.log(myDate.toDateString());//=>give the current date in string format
console.log(myDate.toLocaleString());//=>give the current date and time in string format according to your location
console.log(myDate.toISOString());//=>give the current date and time in ISO string format
console.log(myDate.toJSON());//=>give the current date and time in JSON string format
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


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleDateString('default' ,{
    weekday:"long",//there will be many entity in place of long like narraw etc
    timeZone: ""//we can also provide timeZone here
})

























