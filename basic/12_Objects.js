//objects=>3:47:00
//we can declare objects as constructor and literals
//if we make objest as constructor then it form singleton object
//and if we make as literals then it contain multiple instances 
//Object.create =>creating object as constructor


//+++++++OBJECT LITERALS+++++++++

const JsUser = {//creating object as lliterals which contains keys and values

    name:"Riyaz",//name is here as string too
    age:"23",
    location:"Hyderabad",
    email:"riyaz@gmail.com",
    isLoggedIn:false,
    lastLogInDays:["monday","saturday"]
} 

//we can access all element in object by dot . like JsUser.email etc
console.log("A" ,JsUser.email);
console.log("B" ,JsUser["email"])//behind the scene name email kept as string so we have to give here as string too









