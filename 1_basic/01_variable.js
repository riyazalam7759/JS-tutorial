const accountId=855102
let accountEmail= "user@example.com"
var accountPassword= "12345"
let accountState;
console.log(accountState)//=>undefined
/*
prefer not to use var datatype
because of issue in block scope and functional scope
 */
accountCity= "Bihar"
//accountId=233 =>this is not allowed we cant change the constant value 
accountEmail="ryz@gmail.com"//we can change the let varible
accountPassword="54321"//var datatypes also can be changed
console.log(accountEmail)

console.log(accountCity)//=>Bihar .. how even this works 

console.log([accountId, accountEmail, accountCity])//it will show all variable in tabular strucure like [ 855102, 'ryz@gmail.com', 'Bihar' ]
console.table([accountId, accountEmail, accountCity])//it will show like this below
/*
┌─────────┬─────────────────┐
│ (index) │ Values          │
├─────────┼─────────────────┤
│ 0       │ 855102          │
│ 1       │ 'ryz@gmail.com' │
│ 2       │ 'Bihar'         │
└─────────┴─────────────────┘
 */