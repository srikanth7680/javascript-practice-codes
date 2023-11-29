//Arrow functions in javascript
//Syntax of Arroe function 
let imp = (user) => {
  console.log("hello world This is 'Arrow function'");
}
imp('user')//hello world This is 'Arrow function'
 

//Addition of two numbers using arrow functions
let add = (num1,num2) =>{
  return num1 + num2
}
x = add(3,4)
console.log(x);//7

//Additon using n number of parameters
let sum = (...numbers) => {
  let sum = 0
  for (const i of numbers) {
        sum = sum + i
  }
  return sum
}
total = sum(1,2,3,4,5,6)
console.log(total);///21