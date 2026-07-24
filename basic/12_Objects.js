//objects=>3:47:00
//we can declare objects as constructor and literals
//if we make objest as constructor then it form singleton object
//and if we make as literals then it contain multiple instances 
//Object.create =>creating object as constructor


//+++++++OBJECT LITERALS+++++++++

const mySym = Symbol("key1") //declared symbol then how to use as key in object
const mySym2 = Symbol("key2")
const JsUser = {//creating object as lliterals which contains keys and values

    name:"Riyaz",//name is here as string too
    "Full Name":"Riyaz Rafique",//we cant access this fullName using dot .
    mySym:"MyKey1",
    [mySym2]:"myKey2",
    age:"23",
    location:"Hyderabad",
    email:"riyaz@gmail.com",
    isLoggedIn:false,
    lastLogInDays:["monday","saturday"]
} 

//we can access all element in object by dot . like JsUser.email etc
console.log("A" ,JsUser.email);
console.log("B" ,JsUser["email"])//behind the scene name email kept as string so we have to give here as string too
console.log("C" ,JsUser["Full Name"]);
console.log("D" ,JsUser.mySym);//it will give the value but datatype will not be symbol datatype will be string here
console.log("E" , JsUser[mySym2]);//now datatype will be symbol

console.log("\n\nCHANGING VALUE OF KEY OF OBJECT");
JsUser.email="23btsc006@gmail.com"
Object.freeze(JsUser)//now object get freezed and we cant make changes in object JsUser
JsUser.email="23bt@gmail.com"//now email wont be changed
console.log(JsUser);







