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


