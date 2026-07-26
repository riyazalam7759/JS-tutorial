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







