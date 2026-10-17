
//applying for of loop on object => 8:03:00 as we know that for of loop wont be applied on the Object so we apply for in loop
//instead of for of loop we apply for in loop on the Object 


const myObj = {
    js:'JavaScript',
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift by apple'

}
//we will use for in loop for the object iteration 
for(const key in myObj){//for in loop is used to iterate the object
   console.log(key)//all the key will be printed 
   console.log(myObj[key])//this will print the values of the object 
   console.log(`${key} shortcut is for ${myObj[key]}`)
}

//we can also use for in loop on array but it will give index of the array not the values of the array
console.log("\n\n APPLYING FOR IN LOOP ON ARRAY")
const programming =["js" , "rb" , "py" , "java" , "cpp"]
for(const key in programming){
    console.log(key)//all the key (index ) will be printed 
    console.log(programming[key])//all the values will be printed
}


console.log("\n\n APPLYING FOR IN LOOP ON MAP")
const map = new Map()
map.set('IN' , "India")
map.set('USA' , "America")
map.set('Fr' , "France")
for(const key in map){
    console.log(key)//wont print anything even wont show any error
    //cause map is not iteratable so we cant write like this 
}
















