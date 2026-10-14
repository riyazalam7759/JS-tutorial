//ARROW FUNCTIONS 5:30:00
 //this keyword tell us about the current context or it refer current context
//inside browser most of the global object are window object 
 const user ={
    username:"Riyaz",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`)//here you have to add this keyword 
        console.log(this);//output will be all the current context
        
    }
 }

 user.welcomeMessage()//=> Riyaz welcome to website
 user.username="sam"
 user.welcomeMessage()//=> sam welcome to website
 console.log("outside THIS" , this)//=> { } it will give the output empty object cause there is nothing in the current context

console.log("\n\nMORE ABOUT THIS KEYWORD")
function chai(){
    let username ="hitesh"
    console.log(this.username)//it will show undefined this context will only work iside object not in function
    //console.log(this)//many values will be shown 
}
chai()

const chai2 =function(){
    let username2="riyaxx"
    console.log(this.username2)//it will also show undefined
    //console.log(this) many value will be shown 
}
chai2()

console.log("\n\n NOW STARTED ARROW FUNCTION")

const chai3 =()=>{
    let username3 = "faiz"
    console.log(this.username3)//there will be also undefined
    console.log(this)//=> empty object
}
chai3()

const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4))//=>7

const addThree=(num1,num2,num3)=> num1+num2+num3//we can also write like(num1+num2+num3)//=>this is also valid syntax for arrow function
console.log(addThree(3,4,5))//=>12

const fun=()=> ({name:"faiz", age:25}) //=>it return objects syntax to return object in arrow function






