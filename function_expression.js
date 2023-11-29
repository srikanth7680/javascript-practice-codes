///function Expressions in javascript
//anonymous function often reffered as a function expression 
//Syntax for anonymous function


// let add = function()
// {

// }
//Addition of two numbers using anonymous function 
let add = function(num1,num2)
{
  result = num1 + num2
  console.log(result);
}
add(2,4)//6
// By using a return statement
let mul = function(x,y)
{
  return x * y
}
z = mul(3,6)
console.log(z);
