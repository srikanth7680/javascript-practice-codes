///Local variables and global variables

let user = 'srikanth' // global variable
function greet(user)
{
  let num = 5      /// Local variable
  console.log(num);//5
  console.log(user);//srikanth  //It can access because it is a global variable. we can access anywhere in the program
 return  `Hello ${user}`//Hello srikanth
}
let str = greet(user)
console.log(str);
// console.log(num); /// It can't print because it is a local variable.

//Addition

function add(n1,n2,n3=1)// defalult value n3 = 1
{
  console.log(n1,n2,n3);
  return n1 + n2 + n3   // 2 + 4 + 1
}
let result = add(2,4)
console.log(result);//7
//NaN---If you dont pass the argument to parameters it will show NaN
// If you create a default value in the parameters it take the value as a argument



//Sum of n numbers
function sum(...numbers)/// It is used to access n number of arguments
{
  let r = 0
  for (const number of numbers) {
    r = r + number
  }
  return r
}
let x = sum(1,2,3,4,5,6)
console.log(x);
