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

const newNums3 = []
myNums.forEach((num)=>{
    if(num > 14){
        newNums3.push(num)
    }
})
console.log(newNums3)//it will print all the values which are greater than 14

const books =[
 {title:'book1' ,genre:'Fiction' , author:'author1' , price:100 , pubYear:2020},
 {title:'book2' ,genre:'Non-Fiction' , author:'author2' , price:200 , pubYear:2021},
 {title:'book3' ,genre:'Science' , author:'author3' , price:300 , pubYear:2022},
 {title:'book4' ,genre:'History' , author:'author4' , price:400 , pubYear:2023},
 {title:'book5' ,genre:'Biography' , author:'author5' , price:500 , pubYear:2024},
 {title:'book6' ,genre:'History' , author:'author6' , price:600 , pubYear:2025}
];

let userBooks = books.filter( (bk) => bk.genre === 'History')
//console.log(userBooks)//it will print all the books which are of genre History as object inside array

userBooks = books.filter((bk) => {
    return bk.pubYear >= 2023 && bk.genre === 'History'//here we gave scope so we have to write return keyword otherwise it will print undefined
})
console.log(userBooks)//it will print all the books which are published after 2023


