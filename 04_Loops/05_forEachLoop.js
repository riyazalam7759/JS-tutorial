//for each loop => 8:11:00 
//some loops are directly added in the property of arrays
//this is higher order function
const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

//coding.forEach(call_back_function(){}) =>call back function doesnt have any name 
coding.forEach( function (item) {
    console.log(item)
})

console.log("\n\n APPLYING ARROW FUNCTION IN FOR EACH LOOP")
coding.forEach( (val) =>{//applying arrow function in for each loop as we know that callback function doesnt have name so here we dont given name like function name()=>{}
console.log(val)
} )

console.log("\n\n waht if we written a function outside ")
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)//here we just passed the function name or reference in for each loop and it will print all the values of array

coding.forEach((item , index , arr)=>{//parameter we can pass in for each loop are item , index and array itself
    console.log(item , index , arr)
})

console.log("\n\n APPLYING FOR EACH LOOP ON OBJECT WHICH ARE INSIDE ARRAY")
const myCoding =[//object inside array
    {
        languageName:'JavaScript',
        languageFile:".js"
    },
    {
        languageName:'C++',
        languageFile:".cpp"
    },
    {
        languageName:'Python',
        languageFile:".py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName)

})







