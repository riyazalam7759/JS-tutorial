
const name = "riyaz "//string behind the scene this also invoked object
const rollNo = 6
console.log(name + rollNo + " sital") //concatenation
//but use backticks `` for concatenation we use backticks cause of string interpollation
//cause we make placeholder so that we can inject any variable with the help of ${}
//like as for exxample 
console.log(`my name is: ${name} and my roll Number is: ${rollNo}`);//called it as string interpollation
const gameName = new String('GTriyaz')//we have used object to create string and written string inside the constructor
console.log(gameName[0]);//=>G
console.log(gameName.length);
console.log(gameName.toUpperCase());//but it doesnt change the original string
console.log(gameName.charAt(2)); //at which index which character is present 

console.log(gameName.indexOf('r'));//at which index r is present
const newString = gameName.substring(1, 4) //extracting sub string from 1 to 4 exclude 4 
console.log(newString);

const anotherString = gameName.slice(-9 , 5) //we can also give negative value or index in the slice
console.log(anotherString);

const newstr = "    Riiiyyyaaz     "
console.log(newstr);
console.log(newstr.trim());//trim will remove the unnecessory space from the string 
























