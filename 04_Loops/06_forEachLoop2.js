//more about forEach loop => 8:26:00

const coding = ["js" , "ruby" , "java" , "python" , "cpp"]
const values = coding.forEach((item)=>{
    console.log(item)
    return item
})
//console.log(values)//it will print undefined because for each loop is not returning anything it just iterate the array and print the values of array but it wont return anything so it will print undefined

const myNums = [11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20]
//some more methods of for each loop

const newNums = myNums.filter( (num) => num > 15 )//here we havnt given scope so we can write directly without return keywrd
console.log(newNums)//it will print all the values which are greater than 15

const newNums2 = myNums.filter( (num) => {
    return num > 13//here we gave scope so we have to write return keyword otherwise it will print undefined
})
console.log(newNums2)//it will print undefined or empty array because we have not written return statement in the filter method so it will print undefined