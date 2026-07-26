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

 user.welcomeMessage()
 user.username="sam"
 user.welcomeMessage()
 console.log("outside THIS" , this)//=> it will give the output empty object cause there is nothing in the current context

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






