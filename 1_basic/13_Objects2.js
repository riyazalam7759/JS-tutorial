//Objects =>4:04:00
//we are going to play with singleton object or daclaration of object with constructor
const tindeUser= new Object()
console.log("A",tindeUser);//=>will give empty object same as the literal object 

const tindeUser2={}
tindeUser2.id ="123abc"//adding element to the object 
tindeUser2.name="riyaz"
tindeUser2.isLoggedIn=false


console.log("B",tindeUser2);

const regularUser ={
    email:"ryz@gmail.com",
    fullName:{
        UserFullName:{
            firstName:"Riyaz",
            LastName:"Rafique"

        }
    }
}

console.log("C",regularUser.fullName.UserFullName.firstName);


console.log("\n\nCOMBINING TOW OR MORE OBJECTS")
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
const obj3={7:"g",8:"h"}
//const obj3={obj1,obj2}n =>cant do like this to combine the objects
const obj4=Object.assign({},obj1,obj2,obj3)//=>syntax to combine two object here empty object is optional
console.log("E",obj4)//object assign is a static method to copy all one or more source objects to form a target object and it returns the target modified object 
//Object.assign(target , source1 , source2 , more) so we add an empty object 

const obj5={...obj1,...obj2}//spreading out the objects
console.log(obj5);
console.log("F",Object.keys(obj2))//=>output will be as arrays
console.log("G",Object.values(obj2))//give the values of object in form of arrays
console.log("H",Object.entries(obj2))//it will make arrays of arrays each array has two element keys and values and these arrays will be in a outside array

console.log(obj2.hasOwnProperty('9'))//does this obj2 contain 9(check key only) =>false
console.log(obj2.hasOwnProperty('5'))

const user=[//objecct inside array
    {
        name:"riyaz",
        email:"ryz@gmail.com"
    },
    {
        name:"Faiz",
        email:"fz@gmail.com"
    },
    {
        name:"jani",
        email:"jani@gmail.com"
    }
]
console.log(user[1].email)//=> output will be fz@gmail.com

