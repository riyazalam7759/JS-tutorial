//SCOPE => 5:6:00
let a = 100
if(true)
{
    let a=10
    const b=20
    var c=30
    console.log("inner a :",a)
}
console.log("global a:" ,a);//global a will be printed 
//console.log(b)=>wont be printed bcause b is executable only inside the if condition 
console.log(c)//=> but c is a global 





