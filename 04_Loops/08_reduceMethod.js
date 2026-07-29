//Reduce Method => 8:50:00
//reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

/*
const arr =[1,2,3,4,5];
0+1+2+3+4+5=15
const initialValue = 0;
const sumWithInitial = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
accumulator => it is a empty variable first store the initial value which is 0 (zero) and then it will store the sum of the current value and the initial value which is 1+0=1, then it will store the sum of the current value and the previous sum which is 2+1=3, then it will store the sum of the current value and the previous sum which is 3+3=6, then it will store the sum of the current value and the previous sum which is 4+6=10, then it will store the sum of the current value and the previous sum which is 5+10=15.
reducer will also have call back function which will take two parameters accumulator and currentValue. The accumulator will store the sum of the previous values and the currentValue will store the current value of the array. The initial value is 0 (zero) which is passed as the second argument to the reduce() method. The reduce() method will return a single value which is the sum of all the values in the array.
console.log(sumWithInitial); // expected output: 15
 */

const myNums = [1, 2, 3, 4 , 5];
const myTotal=myNums.reduce(function(acc , currVal){
    console.log(`accumulator: ${acc} , currentValue: ${currVal}`);
    return acc + currVal;
}, 0)// 0 is the initial value of the accumulator

console.log("the total sum is :" , myTotal)

