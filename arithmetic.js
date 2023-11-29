///Arithmetic Operators
//addition of two numbers
let num1 = 4
let num2 = 3
let result = num1 + num2
console.log(result);//7
//subtraction of two numbers
n1 = 4
n2 = 2
sub = n1 - n2
console.log(sub);//2
//multiplication of two numbers
n1 = 4
n2 = 3
mul = n1 * n2
console.log(mul);//12
//Division of two numbers
n1 = 4
n2 = 2
div = n1/n2
console.log(div);//2
//modulo division
n1 = 5
n2 = 2
mod = n1%n2
console.log(mod);//1



// Arithmetic operators on boolean values // true-1 false-0
let x = true//1
let y = true//1
let z = x+y
console.log(z);//2
//
let x1 = false
let y1 = true
let z1 = x1 + y1
console.log(z1);//1
//
let num = 5
num = num+4 // or num+=4
console.log(num);//9
num++                  // num++ or ++num are both gives the same value
console.log(num);//10  //If we want to increment the 1 we can use num++.Because,It is a increment.
num--
console.log(num);//9

//Post Increment and Pre Increment
let number = 5
let v = number++ // post increment num++
console.log(v,number);// 5 6 (In post increment first it assign the value then the increment happend)
///  ++num  PRE INCREMENT (In pre Increment first it increment then assign a value)

//find a cube of a number 
let cube = 4
let result1 = cube*cube*cube
result1 = Math.pow(cube,3)//using math module
result = cube **3
console.log(result1)
console.log(result1)
console.log(result1)//64
//
let j = undefined
let k = null
re = j + k
console.log(re);//NaN
// null+ null = 0