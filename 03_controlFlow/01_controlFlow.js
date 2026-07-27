//IF satatement =>6:24:00
//< , > , <= , >= , == , != , === , !==
//!==  it also check the type of the value give true if not same
const isUserLoggedIn=true

if(2 == "2"){
    console.log("executed")
}

if(2 === "2"){
    console.log("executed2")//wont be executed 
}

const balance = 1000
if(balance>500) console.log("test ") , console.log("test 2");

if(balance<500){
    console.log("less than 500");
}
else if(balance<750){
    console.log("less than 750")
}
else if(balance<900){
    console.log("less than 900")
}
else {
    console.log("more than or equal to 900")
}

const isUserLoggedIn2=true
const debitcard = true
if(isUserLoggedIn2 && debitcard )
{
    console.log("allow to buy ")
}
  
