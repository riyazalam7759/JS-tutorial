//other loops =>7:50:00
//these are arrays specific loops

const arr = [10 , 11 , 12 , 13 , 14]
// for (const element of object) {   syntax of for of loop
    
// }

for (const num of arr) {
    console.log(num)  
}

const greeting = "hello world"
for(const greet of greeting){
    console.log(`each character ${greet}`)
}

//+++++++++++++++++++MAP++++++++++++++++
//there is no any duplicate value all values are unique
console.log("\n\nLEARNING MAP")//stores only unique values
const map = new Map()
map.set('IN' , "India")
map.set('USA' , "America")
map.set('Fr' , "France")
//console.log(map)//similar to object like it contain key and its values
for(const key of map){
    console.log(key)//it will give key as well as values in array form 
}
console.log("\n")
for(const [key , value] of map){
    console.log(key , ':-' , value)//now we did destructure of map by which we can princ key and value individually
}

console.log("\n\n APPLYIN FOR OF LOOP ON OBJECT")
const myObj = {
    'game1':'NFS',
    'game2':'Spiderman',
    'game3':'MineCraft'
}
for([key , value] of myObj){//this will give error
    console.log(key , ':-' , value)//but this is not iterable it wont work like this 
}

