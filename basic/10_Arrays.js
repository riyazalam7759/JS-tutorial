// ARRAYS => 3:12:00

const myArr=[0,1,2,3,4,5]
//array in JS can be resized and can store different type of element also in same array 
//array can have array inside array
//whenever we do copy operation then it makes shallow copy not deep copy
//means shares the same reference if i will change in the copy array then there will also be changed in original array 

const myHeros = ["shakti" , "ironMan" , "captain"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

//Array Methods 
console.log("SOME BASIC METHOD ABOUT ARRAY ");
myArr.push(6)
myArr.push(7)//added element at last of the array 
console.log(myArr);
myArr.pop()//it will delete the last element of the array 
myArr.unshift(8)//added element at the starting of the array then all the previous element will be shifted toward
myArr.shift()//this will remove the first element of the array

console.log(myArr.includes(12))//is there any element of 12 value and give output in true or false 

console.log(myArr.indexOf(3));//=>findig index of element 3

























