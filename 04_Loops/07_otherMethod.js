//  APPLYING OTHER METHODS => 8:42:00

const myNumbers = [11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20]
const newNums = myNumbers.map((num)=> num +10)
console.log(newNums)//it will print all the values of array after adding 10 in each value of array

console.log("\n\n LEARNING CHAINING ")
const myNumbers2 = [41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50]
const newNums2 = myNumbers2
              .map((num)=> num * 10)
              .map((num)=> num + 100 )
              .filter((num)=> num>550)
console.log(newNums2)//it will print all the values in array after multiplying 10 in each value of array and then adding 100 in each value of array and then filter all the values which are greater than 550