//Arrays 2=>3:30:00
const marvel = ["Ironman" , "thor" ,"spiderman"]
const dc = ["superman" , "flash" ,"batman"]

//marvel.push(dc)//it will goes like array inside array
console.log(marvel);
const AllHeros=marvel.concat(dc)//it returns new array which make element off other array to this array 
console.log(marvel);
console.log("All heros :" ,AllHeros);

const AllHeros2 = [ ...marvel , ...dc]//...marvel =>this will spread every element of the array..also we can add more arrays
console.log(AllHeros2);//now each element of both arrays will be counted as separaate element of this Allheros2

const arr1 = [21,22,23,[24,25,26],27,[28,29,[30,31]]]
const flatArr=arr1.flat(Infinity)//in place of infinity we can give the level of array to be flatted
console.log(flatArr);

console.log(Array.isArray("riyazz"));//it give output as true or false is riyazz array or not 
console.log(Array.from("riyazz"));//this is string converted into array with each alphabet as element we can give anything like object etc to convert into array 
console.log(Array.from({name:"Riyaz"}));//=>it will give empty array you have to tell whether make array of kays or values 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//it will return the new array from the set of element it may variable , arrays etc











